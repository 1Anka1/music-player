import type { Track } from '~/entities/track'

export interface Playlist {
  id: string
  title: string
  description: string
  duration: number
  public: boolean
  is_loved_track: boolean
  collaborative: boolean
  nb_tracks: number
  fans: number
  link: string
  share: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  checksum: string
  tracklist: string
  creation_date: string
  md5_image: string
  picture_type: string
  creator: {
    id: string
    name: string
    tracklist: string
    type: string
  }
  type: string
  tracks: {
    data: Track[]
  }
}
