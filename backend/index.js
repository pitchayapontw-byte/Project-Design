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

// ลบหนังสือโดย ID
app.delete('/books/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const book = await prisma.book.delete({
      where: { id },
    })

    res.json({ message: 'Deleted successfully', book })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// แก้ไขหนังสือโดย ID
app.put('/books/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { title, author, type, genre, price, rating } = req.body

    const book = await prisma.book.update({
      where: { id },
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

// ดึงหนังสือโดย ID
app.get('/books/:id', async (req, res) => {
  const id = parseInt(req.params.id)

  const book = await prisma.book.findUnique({
    where: { id },
  })

  res.json(book)
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
