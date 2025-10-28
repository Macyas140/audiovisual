import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get('/api/audiovisual/', (req, res) => {
  console.log("entro en la ruta home actualizada ፨v")
    res.send('Hello World!')
})

app.post('/api/audiovisual/', (req, res) => {
  console.log("entro en la ruta home de post ፨v")
  const products=[
    {name: "camara profecional ፨v", id:"1"},
    {name: "micro profecional ፨v", id:"2"},
  ]
    res.json({"Productos: ":products});
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
