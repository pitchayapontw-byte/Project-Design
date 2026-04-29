const express = require('express')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// ดึงหนังสือทั้งหมด
app.get('/books', async (req, res) => {
  const books = await prisma.book.findMany()
  res.json(books)
})

// เพิ่มหนังสือใหม่
app.post('/books', async (req, res) => {
  const { title, author, type, genre, price, rating } = req.body

  try {
    const book = await prisma.book.create({
      data: {
        title,
        author,
        type,
        genre,
        price: Number(price),
        rating: Number(rating),
      },
    })

    res.json(book)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
