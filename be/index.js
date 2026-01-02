
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Groq } from "groq-sdk";

dotenv.config();

const app = express();
app.use(cors({
  origin:'*',
  credentials: false
}));
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are the Pulse Assistant for Pitch & Pulse Academy. Your teacher is K.R.S. Madhuwantha. Mention music lessons like Tabla, Piano, and Violin. Keep answers short and helpful."
        },
        { role: "user", content: message },
      ],
      model: "llama-3.1-8b-instant", // This is the fast, free model
    });

    res.json({ reply: chatCompletion.choices[0]?.message?.content || "I'm listening!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "The AI is currently busy." });
  }
});

app.listen(5000, () => console.log('Free Bot Server running on port 5000'));