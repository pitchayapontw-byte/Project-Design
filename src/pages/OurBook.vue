<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ countallbook }}
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md">
    <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <div class="text-h4 text-white">รวมหนังสือที่สะสม</div>

              <div class="q-pa-md q-gutter-sm">
                <q-btn color="aqua" icon-right="add2" label="Add Book" @click="dialog = true" />
              </div>
            </div>
          </th>
        </tr>
        <!-- หัวตาราง -->
        <tr class="dataheader">
          <th class="dataheader" style="font-size: large">ลำดับ</th>
          <th class="dataheader" style="font-size: large">ขื่อเรื่อง</th>
          <th class="dataheader" style="font-size: large">ผู้แต่ง</th>
          <th class="dataheader" style="font-size: large">ประเภท</th>
          <th class="dataheader" style="font-size: large">ราคา</th>
          <th class="dataheader">คะแนน</th>
        </tr>
      </thead>
      <!-- ข้อมูลตาราง -->
      <tbody :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <tr v-for="book in books" :key="book.id">
          <td class="data">{{ book.order }}</td>
          <td class="data">{{ book.title }}</td>
          <td class="data">{{ book.author }}</td>
          <td class="data">{{ book.genre }}</td>
          <td class="data">{{ book.price }}</td>
          <td class="data">{{ book.rating }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
  <q-dialog v-model="dialog">
    <q-card class="q-pa-md">
      <q-input v-model="form.order" label="Order" type="number" />
      <q-input v-model="form.title" label="Title" />
      <q-input v-model="form.author" label="Author" />
      <q-input v-model="form.type" label="Type" />
      <q-input v-model="form.genre" label="Genre" />
      <q-input v-model="form.price" label="Price" type="number" />
      <q-input v-model="form.rating" label="Rating" type="number" />

      <q-btn label="Save" color="green" @click="addBook" />
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const books = ref([])
const countallbook = ref('จำนวนหนังสือที่สะสม: 0 เล่ม')
const form = ref({
  title: '',
  author: '',
  type: '',
  genre: '',
  price: 0,
  rating: 0,
})
const dialog = ref(false)

const addBook = async () => {
  await fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.value),
  })

  // reload data
  const res = await fetch('http://localhost:3000/books')
  books.value = await res.json()

  countallbook.value = `จำนวนหนังสือที่สะสม: ${books.value.length} เล่ม`
}

onMounted(async () => {
  const res = await fetch('http://localhost:3000/books')
  const data = await res.json()

  books.value = data
  countallbook.value = `จำนวนหนังสือที่สะสม: ${data.length} เล่ม`
})
</script>

<style lang="sass" scoped>
// การ์ด
.my-card
  width: 100%
  max-width: 250px

// หัวตาราง
.dataheader
  text-align: center;
  color: white;
  font-weight: semi-bold;
  font-size: large;

// ข้อมูลตาราง
.data
  font-size: medium;
  font-color: blue;
</style>
