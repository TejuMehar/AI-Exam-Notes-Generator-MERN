import { buildPrompt } from "../utils/promptBuilder";

const Gemini_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview:generateContent";

export const genrateGeminiResponse = async (prompt) => {
  const responce = await fetch(
    `${Gemini_URL} ? ${process.env.GEMINI_API_KEY}`,
    {
      methos: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    },
  );
  if (!responce.ok) {
    const err = await responce.text();
    throw new Error(err);
  }

  const data = await responce.json();

  const text = data.candidates[0]?.content?.parts[0]?.text;

  if (!text) {
    throw new Error("Failed to generate response");
  }

  const cleanText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanText);
};
