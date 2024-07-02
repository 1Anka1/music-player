<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { Mousewheel } from 'swiper/modules'

const isOpened = ref(false)

function toggle() {
  isOpened.value = !isOpened.value
}

const slides = ref([
  { image: 'https://via.placeholder.com/600x300?text=Slide+1' },
  { image: 'https://via.placeholder.com/600x300?text=Slide+2' },
  { image: 'https://via.placeholder.com/600x300?text=Slide+3' },
  { image: 'https://via.placeholder.com/600x300?text=Slide+4' },
  { image: 'https://via.placeholder.com/600x300?text=Slide+5' },
  { image: 'https://via.placeholder.com/600x300?text=Slide+6' },
])
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
  <Swiper
    :slides-per-view="3"
    :space-between="5"
    :pagination="{ clickable: true }"
    :mousewheel="true"
    :keyboard="true"
    :modules="[Mousewheel]"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image">
    </SwiperSlide>
  </Swiper>
</template>
