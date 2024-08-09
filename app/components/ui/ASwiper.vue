<script setup lang="ts">
import Swiper from 'swiper'
import 'swiper/css'

const { options } = defineProps<{
  options?: ConstructorParameters<typeof Swiper>[1]
  wrapperClass?: string
}>()

const swiperElement = ref<HTMLDivElement>()
const swiper = ref<Swiper>()

function initSwiper() {
  swiper.value = new Swiper(swiperElement.value!, options)
}

onMounted(initSwiper)

onBeforeUnmount(() => {
  swiper.value?.destroy()
})

defineExpose({
  next: () => swiper.value?.slideNext(),
  prev: () => swiper.value?.slidePrev(),
  canPrev: computed(() => swiper.value ? !swiper.value.isBeginning : false),
  canNext: computed(() => swiper.value ? !swiper.value.isEnd : false),
})
</script>

<template>
  <div
    ref="swiperElement"
    class="swiper"
  >
    <div
      class="swiper-wrapper"
      :class="wrapperClass"
    >
      <!-- Each swiper item should have .swiper-slide -->
      <slot />
    </div>
  </div>
</template>
