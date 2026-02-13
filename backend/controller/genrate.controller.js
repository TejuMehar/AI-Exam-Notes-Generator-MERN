import User from "../models/user.model.js";
import { buildPrompt } from "../utils/promptBuilder.js";
import { genrateGeminiResponse } from "../services/gemini.services.js";

export const genrateNotes = async (prompt) => {
  try {
    const {
      topic,
      classLevel,
      examType,
      revisionMode = false,
      includeDiagram = false,
      includeChart = false,
    } = req.body;

    if (!topic) {
      return res.status(400).json({ message: "Topic is required" });
    }
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.credit < 10) {
      user.isCreditAvailable = false;
      await user.save();
      return res.status(400).json({ message: "Insufficient credits" });
    }
    const prompt = buildPrompt({
      topic,
      classLevel,
      examType,
      revisionMode,
      includeDiagram,
      includeChart,
      user,
    });

    const aiResponse = await genrateGeminiResponse(prompt);

    const notes = await Notes.create({
      topic,
      classLevel,
      examType,
      revisionMode,
      includeDiagram,
      includeChart,
      userId: req.userId,
      content: aiResponse,
    });

    user.credit -= 10;
    if (user.credit <= 0) {
      user.isCreditAvailable = false;
    }
    if (!Arrays.isArray(user.notes)) {
      user.notes = [];
    }

    user.notes.push(notes._id);
    await user.save();

    return res.status(200).json(aiResponse);
  } catch (error) {
    console.error("Error generating notes:", error);
    throw new Error("Failed to genrate Error");
  }
};
