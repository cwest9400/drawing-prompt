import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function (req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: "OpenAI API key not configured"
            }
        });
        return;
    }

    const animal = req.body.animal || "";
    if (animal.trim().length === 0){
        res.status(400).json({
            error: {
                message: "Please enter a base animal for the prompt"
            }
        });
        return;
    }

    try {
        
    }
}