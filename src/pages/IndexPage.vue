<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const lorem = 'Welcome to the Coffee Shop! This is a simple Quasar application that demonstrates how to create a card component using Vue.js and Quasar Framework. You can customize this card with your own content and styles. Enjoy your coffee!'
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
