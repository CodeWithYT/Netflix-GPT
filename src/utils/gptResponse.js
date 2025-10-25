import { useState } from "react";
import openAI from "./openAI";

const gptResponse = async (QUERY) => {
  const Response = await openAI.responses.create({
    model: "gpt-3.5-turbo",
    instructions:
      "You are a movie names suggestor that recommends films based on the user's query",
    input: QUERY,
  });
  return Response.output_text;
};
export default gptResponse;
