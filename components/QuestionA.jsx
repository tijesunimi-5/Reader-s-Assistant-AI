"use client";
import React from "react";

const QuestionA = () => {
  const qna = require("@tensorflow-models/qna");

  const loadModel = async () => {
    // Load the model.
    const model = await qna.load();

    // Finding the answers
    const answers = await model.findAnswers(question, passage);

    console.log("Answers: ");
    console.log(answers);
  };
  return <div></div>;
};

export default QuestionA;
