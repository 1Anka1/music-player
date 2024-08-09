import type { Track } from '~/entities/track'

export const usePlayerStore = createStore('player', ({ state }) => {
  const currentTrack = state<Track | null>(null)

  return { currentTrack }
})
