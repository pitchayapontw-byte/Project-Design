<template>
  <div
    class="fullscreen text-white text-center q-pa-md flex flex-center"
    :style="{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  ></div>
</template>

<script setup>
import bg from 'src/IMG/BG404.png'
</script>
