<script setup lang="ts">
import type { Track } from '~/entities/track'

const { track } = defineProps<{
  track: Track
}>()

const audioRef = ref<HTMLAudioElement>()
const { playing, volume } = useMediaControls(audioRef, {
  src: track.preview,
})

onMounted(() => {
  volume.value = 0.01
  playing.value = true
})
</script>

<template>
  <div>
    <audio ref="audioRef" controls class="w-full" />
    {{ track.artist.name }} - {{ track.title }}
  </div>
</template>
