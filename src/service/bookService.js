const API_URL = 'http://localhost:3000/books'

// ดึงทั้งหมด
export const getBooks = async () => {
  const res = await fetch(API_URL)
  return await res.json()
}

// เพิ่มหนังสือ
export const addBookService = async (bookData) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  })

  return await res.json()
}

// ลบหนังสือ
export const deleteBookService = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
}

export const updateBookService = async (book) => {
  const res = await fetch(`http://localhost:3000/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })

  return await res.json()
}
