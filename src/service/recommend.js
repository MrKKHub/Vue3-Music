import { get } from './base'

export function getRecommend (url, params) {
  return get('/api/getRecommend')
}
