import request from 'superagent'

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const chatGPTUrl = '/api/v1/chatgpt'

export async function getWordInfo(word: string) {
  const response = await request.get(`${url}${word}`)
  
  return response.body
}

export async function postGpt(gptWord: string) {
  const newObj = {
    name: gptWord,
  }
  

  const response = await request.post(chatGPTUrl).send(newObj)
  
  return response.body
}
