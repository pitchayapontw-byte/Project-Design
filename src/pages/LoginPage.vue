<template>
  <div class="bg-wrapper">
    <div class="col-6 q-pa-md">
      <q-card class="my-card absolute-center">
        <q-card-section style="width: 400px">
          <div class="text-h4 text-center q-mb-md">Login</div>
          <div class="row justify-center q-mb-md">
            <q-avatar size="100px" color="orange">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </div>

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
  background: rgba(129, 201, 255, 0.2); /* ฟ้าอ่อนโปร่ง */
  backdrop-filter: blur(10px); /* เบลอพื้นหลัง */
  -webkit-backdrop-filter: blur(10px); /* รองรับ Safari */

  color: #000;
  border-radius: 12px;

  border: 1px solid rgba(255, 255, 255, 0.3); /* ขอบใสๆ */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); /* เงานุ่มๆ */
}

.bg-wrapper {
  min-height: 100vh;
  background: image('https://cdn.quasar.dev/img/avatar.png') no-repeat center;
  background-size: cover;
}
</style>
