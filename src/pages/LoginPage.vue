<template>
  <div class="q-pa-md row">
    <div class="col-6 q-pa-md">
      <q-card class="my-card absolute-center">
        <q-card-section style="width: 400px">
          <div class="text-h4 text-center q-mb-md">Login</div>
          <q-input
            filled
            v-model="Username"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          />
          <q-input
            filled
            v-model="Password"
            label="Your password *"
            type="password"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.my-card {
  background-color: #81c9ff; /* ฟ้าของ Material Design */
  color: rgb(0, 0, 0); /* ข้อความภายในการ์ดให้เป็นสีขาว */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* เงาการ์ด */
  border-radius: 8px; /* มุมมนของการ์ด */
}
</style>
