import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
console.log("text");

const genAI = new GoogleGenerativeAI("AIzaSyC-BbPH-U-DmOe5H5bn6QMxOkXJixo6yJ4");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =
    "Write a sonnet about a programmers life, but also make it rhyme.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
