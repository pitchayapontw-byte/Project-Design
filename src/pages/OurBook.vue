<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ countallbook }}
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md table-container">
    <q-markup-table flat bordered class="book-table">
      <thead class="bg-teal">
        <tr>
          <th colspan="8">
            <div class="row no-wrap items-center">
              <div class="text-h4 text-white">รวมหนังสือที่สะสม</div>

              <div class="q-pa-md q-gutter-sm">
                <q-btn color="aqua" icon-right="add2" label="Add Book" @click="dialog = true" />
                <q-btn
                  color="red"
                  label="Delete Selected"
                  :disable="selected.length === 0"
                  @click="confirmDeleteSelected"
                />
              </div>
            </div>
          </th>
        </tr>
        <!-- หัวตาราง -->
        <tr class="dataheader">
          <th class="dataheader"></th>
          <th class="dataheader" style="font-size: large">ลำดับ</th>
          <th class="dataheader" style="font-size: large">ขื่อเรื่อง</th>
          <th class="dataheader" style="font-size: large">ผู้แต่ง</th>
          <th class="dataheader" style="font-size: large">ประเภท</th>
          <th class="dataheader" style="font-size: large">แนว</th>
          <th class="dataheader" style="font-size: large">ราคา</th>
          <th class="dataheader">คะแนน</th>
        </tr>
      </thead>
      <!-- ข้อมูลตาราง -->
      <tbody :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <tr v-for="book in books" :key="book.id" :class="{ selected: selected.includes(book.id) }">
          <td><input type="checkbox" v-model="selected" :value="book.id" /></td>
          <td class="data text-center">{{ book.order }}</td>
          <td class="data">
            <q-input v-model="book.title" borderless dense @blur="updateBook(book)" />
          </td>
          <td class="data">
            <q-input v-model="book.author" borderless dense @blur="updateBook(book)" />
          </td>
          <td class="data">
            <q-input v-model="book.genre" borderless dense @blur="updateBook(book)" />
          </td>
          <td class="data">
            <q-input v-model="book.type" borderless dense @blur="updateBook(book)" />
          </td>
          <td class="data">
            <q-input
              v-model.number="book.price"
              type="number"
              borderless
              dense
              input-class="text-center"
              @blur="updateBook(book)"
            />
          </td>
          <td class="data">
            <q-rating
              v-model="book.rating"
              max="5"
              size="1.5em"
              @update:model-value="updateBook(book)"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
  <q-dialog v-model="dialog">
    <q-card class="q-pa-md">
      <q-input v-model="form.title" label="=ชื่อเรื่อง" />
      <q-input v-model="form.author" label="ผู้แต่ง" />
      <q-input v-model="form.type" label="แนว" />
      <q-input v-model="form.genre" label="ประเภท" />
      <q-input v-model="form.price" label="ราคา" type="number" />
      <q-input v-model="form.rating" label="คะแนน" type="number" />
      <q-btn label="Save" color="green" @click="addBook" />
    </q-card>
  </q-dialog>
  <q-dialog v-model="confirmDialog">
    <q-card class="q-pa-md">
      <div class="text-h6">Confirm Delete</div>
      <div>คุณแน่ใจหรือไม่?</div>

      <div class="row justify-end q-gutter-sm q-mt-md">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn color="red" label="Delete" @click="confirmDelete" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import {
  getBooks,
  addBookService,
  deleteBookService,
  updateBookService,
} from 'src/service/bookService'

const $q = useQuasar()
const confirmDialog = ref(false)
const selected = ref([])
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
  await addBookService(form.value)

  books.value = await getBooks()

  countallbook.value = `จำนวนหนังสือที่สะสม: ${books.value.length} เล่ม`
}

const confirmDeleteSelected = () => {
  console.log('clicked selected:', selected.value)

  $q.dialog({
    title: 'Confirm Delete',
    message: `ต้องการลบ ${selected.value.length} รายการใช่หรือไม่?`,
    cancel: true,
    persistent: true,
  }).onOk(async () => {
    console.log('confirmed delete')
    await deleteSelected()
  })
}

// ดึงข้อมูลหนังสือเมื่อหน้าโหลด
onMounted(async () => {
  const data = await getBooks()

  books.value = data

  countallbook.value = `จำนวนหนังสือที่สะสม: ${data.length} เล่ม`
})

// ลบหนังสือที่เลือก
const deleteSelected = async () => {
  await Promise.all(selected.value.map((id) => deleteBookService(id)))

  selected.value = []

  books.value = await getBooks()
}

const updateBook = async (book) => {
  await updateBookService(book)
}
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
  color: black;

.q-input
  opacity: 0.8

.q-input:hover
  opacity: 1

.selected
  background: #ffe0e0;

.book-table
  table-layout: fixed
  width: 100%

.data
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  font-size: medium

.dataheader
  text-align: center
  color: white
  font-size: large

.table-container
  overflow-x: auto

.book-table
  min-width: 1000px
</style>
