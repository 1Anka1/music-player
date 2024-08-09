import type { Playlist } from '~/entities/playlist'
import type { Track } from '~/entities/track'

interface Item<T> {
  data: T[]
  total: number
}

export interface Chart {
  tracks: Item<Track>
  playlists: Item<Playlist>
}
