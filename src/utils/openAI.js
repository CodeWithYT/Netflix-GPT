import OpenAI from "openai";
import { OPEN_API_KEY } from "./constants";

const openAI = new OpenAI({
  apiKey: OPEN_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAI;
