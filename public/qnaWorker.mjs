import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";

let model = null;

async function loadModel() {
  model = await qna.load();
  postMessage({ type: "loaded" });
}

loadModel();

onmessage = async (e) => {
  if (!model) return;

  const { context, question } = e.data;
  const answers = await model.findAnswers(question, context);

  postMessage({ type: "result", answers });
};
