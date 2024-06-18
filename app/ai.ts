import { createClient } from "../utils/supabase/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyBPVJwI-xc8476xFEPTsuZlbi8BLLDH4Oo");
export const fetchSummary = async (excerpt: string) => {
  const prompt = `
    Based off of what the user wants to learn in this prompt:
    ${excerpt}
    Try teaching them or reccomending them resources to learn it. Make the text one paragraph or more and do not format it in any way.
  `;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();

  return text;
};
