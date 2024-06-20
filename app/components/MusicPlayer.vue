<script setup lang="ts">
const isOpened = ref(false)

function toggle() {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-50 bg-dark duration-300 ease-out" :class="isOpened ? 'h-dvh' : 'h-16'">
    <div v-if="isOpened">
      картинки з іншими треками
      .
      всі інші контроли
    </div>
    <div>
      трекер
    </div>
    <div @click="toggle">
      картинка
      .
      назва
      .
      кнопки
    </div>
  </div>
</template>
