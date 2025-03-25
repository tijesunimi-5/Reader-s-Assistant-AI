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

  // useEffect(() => {
  //   const loadModel = async () => {
  //     console.log("Loading QnA model...");
  //     const qnaModel = await qna.load();
  //     setModel(qnaModel);
  //     console.log("QnA model loaded successfully!");
  //   };
  //   loadModel();
  // }, []);

  useEffect(() => {
    const loadModel = async () => {
      console.log("Loading QnA model...");
      setLoading(true);

      // Set backend to CPU
      await tf.setBackend("cpu");
      await tf.ready();

      const qnaModel = await qna.load();
      setModel(qnaModel);

      console.log("QnA model loaded successfully!");
      if (model) {
        setLoading(false);
        return;
      }
    };
    loadModel();
  }, []);

  const handleAskQuestion = async () => {
    if (!model) {
      setError("Model not loaded yet...");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    if (!context) {
      setError("No context provided!");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    if (!question) {
      setError("No question provided!");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    console.log("Context:", context);
    console.log("Question:", question);

    const predictions = await model.findAnswers(question, context);
    console.log("Predictions:", predictions);
    setAnswers(predictions);
  };

  return (
    <div className=" 2xl:w-[1190px] 2xl:ml-[320px] flex-col p-5 rounded bg-[#f5f5f5]  2xl:h-full pb-20 flex 2xl:hidden questionNans">
      <h1 className="2xl:text-3xl text-2xl font-bold text-center text-[#3d3cc9] w-full mt-14">
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

        {loading ? (
          <div>Loading Model...</div>
        ) : (
          <div>Model loaded successfully</div>
        )}
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
          <div>{model ? "Generate Answer" : "Loading Model..."}</div>
        </Button>

        <p>{error}</p>

        <div className="answers bg-white w-full h-auto mt-9">
          {answers.length > 0 ? (
            answers.map((ans, idx) => (
              <div key={idx}>
                <h1 className="text-2xl font-bold">Answer:</h1>
                <p key={idx}>{ans[0].text}</p>
              </div>
            ))
          ) : (
            <p className="text-[20px] p-2 font-[500]">No answers yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionA;
