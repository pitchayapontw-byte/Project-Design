<template>
    <div class="q-pa-md row">
        <div class="col-6 q-pa-md bg-blue-5">
        <p>ใส่คลิป</p>
        </div>
    

      <div class="col-6 q-pa-md">
        <q-card class="my-card">
          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
  
  <script setup>
  const lorem = 'This is the login page content with a nice card.'
  </script>
  
  <style scoped>
  .my-card {
    background-color: #81C9FF; /* ฟ้าของ Material Design */
    color: white; /* ข้อความภายในการ์ดให้เป็นสีขาว */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* เงาการ์ด */
    border-radius: 8px; /* มุมมนของการ์ด */
  }
  </style>
  