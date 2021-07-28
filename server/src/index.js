import express from 'express'
import dotenv from 'dotenv-flow'
import axios from './utils/axios.js'

dotenv.config()
const app = express()
const port = 3000

app.get('/characters', async (req, res) => {
  const { data } = await axios.get('/characters')
  return res.header('Access-Control-Allow-Origin', '*')
    .json(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
