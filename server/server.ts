import { join } from 'node:path'
import express from 'express'
import chatgpt from './routes/chatgpt'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/chatgpt', chatgpt)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
