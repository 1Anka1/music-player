export interface Track {
  id: string
  readable: boolean
  title: string
  title_short: string
  title_version: string
  link: string
  duration: string
  rank: string
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  md5_image: string
  time_add: number
  artist: {
    id: string
    name: string
    link: string
    tracklist: string
    type: string
  }
  album: {
    id: string
    title: string
    cover: string
    cover_small: string
    cover_medium: string
    cover_big: string
    cover_xl: string
    md5_image: string
    tracklist: string
    type: string
  }
  type: string
}
