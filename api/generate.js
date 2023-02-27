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
        const completion = await OpenAIApi.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(animal),
            temperature:0.7,
            max_tokens: 150,
        });
        res.status(200).json({ result: completion.data.choices[0].text});
    } catch(error) {
        
    }
}