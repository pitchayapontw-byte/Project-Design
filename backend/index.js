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

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
