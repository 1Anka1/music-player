<script setup lang="ts">
import type { Chart } from '~/entities/chart'
import { usePlayerStore } from '~/features/player'

const { $api } = useNuxtApp()
const { data } = useAsyncData(() => $api<Chart>('/chart'))

const { currentTrack } = usePlayerStore()
</script>

<template>
  <button
    v-for="track in data?.tracks.data"
    :key="track.id"
    class="flex"
    @click="currentTrack = track"
  >
    {{ track.artist.name }} -
    {{ track.title }}
  </button>
</template>
