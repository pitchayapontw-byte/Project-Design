<template>
  <!-- Internal links (ใช้ Vue Router) -->
  <q-item
    clickable
    tag="router-link"
    :to="props.link"
    v-if="props.link.startsWith('/')"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>

  <!-- External links (เปิดในแท็บใหม่) -->
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="props.link"
    v-else
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: String,
  caption: String,
  link: String,
  icon: String
})
</script>
