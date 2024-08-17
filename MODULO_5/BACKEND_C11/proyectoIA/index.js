import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const ApiKey = process.env.OPENAI_API_KEY


app.post('/generate-text', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            "model": "gpt-4o-mini",
            "messages": [
                {
                  "role": "user", 
                  "content": prompt
               }
            ]  
          },{
            headers: {
                Authorization: `Bearer ${ApiKey}`,
            }
          } )
          res.json({
              prompt: prompt,
              response: response.data.choices[0].message.content
          })
    } catch (error) {
        res.status(500).send({
            message: 'Error en la petición',
            error
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})