const express = require('express')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is working')
})
// ดึงหนังสือทั้งหมด
app.get('/books', async (req, res) => {
  const books = await prisma.book.findMany()
  res.json(books)
})

// เพิ่มหนังสือใหม่
app.post('/books', async (req, res) => {
  try {
    console.log(req.body)

    const { title, author, type, genre, price, rating } = req.body

    const book = await prisma.book.create({
      data: {
        title,
        author,
        type,
        genre,
        price: parseInt(price),
        rating: parseInt(rating),
      },
    })

    res.json(book)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

// app.post('/books', (req, res) => {
//   console.log('HIT POST /books')
//   console.log(req.body)

//   res.json({ ok: true })
// })

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
