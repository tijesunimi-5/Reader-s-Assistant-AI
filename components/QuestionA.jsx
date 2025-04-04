"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import * as qna from "@tensorflow-models/qna";
import * as tf from "@tensorflow/tfjs";

const QuestionA = () => {
  const [model, setModel] = useState(null);
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [worker, setWorker] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setLoading(true);

    const qnaWorker = new Worker("/qnaWorker.js");
    setWorker(qnaWorker);

    qnaWorker.onmessage = (e) => {
      console.log("Worker message received:", e.data);

      if (e.data.type === "loaded") {
        console.log("QnA model is ready.");
        setLoading(false);
      } else if (e.data.type === "result") {
        console.log("Answer received:", e.data.answers);

        if (Array.isArray(e.data.answers) && e.data.answers.length > 0) {
          setAnswers(e.data.answers.map((ans) => ans.text)); // Extract texts correctly
        } else {
          setAnswers(["No answer found"]); // Set as an array to prevent errors
        }

        setFetching(false);
        setLoading(false);
      } else if (e.data.type === "error") {
        console.error("Worker error:", e.data.message);
        setFetching(false);
        setLoading(false);
      }
    };


    qnaWorker.onerror = (error) => {
      console.error("Worker error:", error);
      setFetching(false);
    };

    return () => qnaWorker.terminate();
  }, []);

  const handleAskQuestion = async () => {
    if (!worker) {
      setError("Model is still loading...");
      setTimeout(() => setError(""), 2000);
      return;
    }

    if (!context) {
      setError("Please provide some text.");
      setTimeout(() => setError(""), 2000);
      return;
    }

    if (!question) {
      setError("Please ask a question.");
      setTimeout(() => setError(""), 2000);
      return;
    }

    setLoading(true);
    worker.postMessage({ context, question });
  };

  return (
    <div className=" 2xl:w-[1190px] 2xl:ml-[320px] flex-col p-5 rounded bg-[#f5f5f5]  2xl:h-full pb-20 flex 2xl:hidden questionNans">
      <h1 className="2xl:text-3xl text-2xl font-bold text-center text-[#3d3cc9] w-full mt-14 2xl:mt-5">
        Question and Answer
      </h1>
      <p className="2xl:p-3 2xl:text-[21px] 2xl:tracking-wide py-3">
        Paste a passage you want to recieve answers on or select a file and
        recieve answer on it, has AI can only answer based on the text you
        provide.
      </p>

      <div className="text-field">
        <Card>
          <textarea
            type="text"
            placeholder="input text"
            rows={10}
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="px-2 py-1 placeholder:text-xl 2xl:placeholder:text-2xl border border-white outline-0 placeholder:italic"
          />
        </Card>

        {/* {loading ? (
          <div>Loading Model...</div>
        ) : (
          <div>Model loaded successfully</div>
        )} */}
        <div className="quest 2xl:w-full 2xl:bg-white 2xl:mt-3">
          <input
            type="text"
            placeholder="Ask question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="h-12 outline-0 border-0 2xl:p-2 
             mt-2 px-2 w-full shadow bg-white"
          />
        </div>
        <Button
          styles={"text-white rounded mt-2"}
          onClick={handleAskQuestion}
          disabled={!model}
        >
          {loading
            ? "Loading Model..."
            : fetching
            ? "Fetching Answer..."
            : "Generate Answer"}
        </Button>

        <p>{error}</p>

        <div className="answers bg-white w-full h-auto mt-9">
          {answers.length > 0 ? (
            <div>
              <h1 className="text-2xl font-bold">Answer:</h1>
              {answers.map((ans, index) => (
                <p key={index}>{ans}</p>
              ))}
            </div>
          ) : (
            <p className="text-[20px] p-2 font-[500]">No answers yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionA;
