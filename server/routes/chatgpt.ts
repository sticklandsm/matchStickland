import express from 'express'
import request from 'superagent'

import dotenv from 'dotenv'
dotenv.config()

const apiKey = process.env.GPT_API_KEY

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const response = await request
      .post('https://api.openai.com/v1/chat/completions')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${apiKey}`)
      .send({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Can you please provide a hint for guessing the word "${req.body.name}" without saying the word?`,
          },
        ],
      })

    const chatGptData = response.body
    res.json(chatGptData)
  } catch (error) {
    console.error(error)
  }
})

export default router
