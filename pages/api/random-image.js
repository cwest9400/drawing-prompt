import axios from 'axios';

const configuration = process.env.UNSPLASH_ACCESS_KEY

export default async function handler(req, res) {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${configuration}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

