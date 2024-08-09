<script setup lang="ts">
import { AppPlayer, usePlayerStore } from '~/features/player'

const { currentTrack } = usePlayerStore()
</script>

<template>
  <div class="flex min-h-dvh flex-col justify-between">
    <div>
      <slot />
    </div>
    <div v-if="currentTrack" :key="currentTrack.id" class="sticky bottom-0">
      <AppPlayer :track="currentTrack" />
    </div>
  </div>
</template>
