import { get } from './base'

export function getSingerList (url, params) {
  return get('/api/getSingerList')
}
