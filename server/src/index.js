import express from 'express'
import dotenv from 'dotenv-flow'
// import axios from './utils/axios.js'
import fs from 'fs'
import path from 'path'

dotenv.config()
const app = express()
const port = 3000

app.get('/characters', async (req, res) => {
  const exampleFile = path.join(process.cwd(), 'example.json')
  const data = JSON.parse(fs.readFileSync(exampleFile, 'utf8'))
  // const { data } = await axios.get('/characters')
  return res.header('Access-Control-Allow-Origin', '*')
    .json(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
