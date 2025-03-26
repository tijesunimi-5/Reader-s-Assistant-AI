self.importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs");
self.importScripts("https://cdn.jsdelivr.net/npm/@tensorflow-models/qna");

let model = null;

async function loadModel() {
  console.log("Loading QnA model...");
  model = await qna.load();
  console.log("QnA model loaded successfully.");
  postMessage({ type: "loaded" });
}

loadModel();

onmessage = async (e) => {
  if (!model) {
    console.error("Model is not loaded yet.");
    postMessage({ type: "error", message: "Model not loaded yet." });
    return;
  }

  const { context, question } = e.data;
  console.log("Received question:", question);
  console.log("Searching in context:", context.slice(0, 100), "..."); // Show only first 100 chars

  const answers = await model.findAnswers(question, context);
  console.log("Answers found:", answers);

  postMessage({
    type: "result",
    answers: answers.length > 0 ? answers : [{ text: "No answer found" }],
  });
};
