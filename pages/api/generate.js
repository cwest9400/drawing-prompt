import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: "OpenAI API key not configured"
            },
        });
        return;
    }

    const animal = req.body.animal || '';
    if (animal.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a base animal for the prompt"
            },
        });
        return;
    }

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(animal),
            temperature:0.7,
            max_tokens: 150,
        });
        res.status(200).json({ result: completion.data.choices[0].text});
    } catch(error) {
      if (error.response) {
        console.error(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
            error: {
                message: 'An error occurred during your request.',
            }
        });
      }
    }
}

function generatePrompt(animal) {
    const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();

    return `Choose 2 random animals and combine them with ${capitalizedAnimal} to make a single animal with characteristics from all three. The animals can be natural, insects, realistic, synthetic, mythological, fantasy or science fiction. try not to use griffin or dragon very often.
  
    Choose a background or environment that would suit the new animal. Include an atmospheric mood too.
    The response should be in the form of a drawing prompt and should begin with "Draw a...".
  
    
  `;
}