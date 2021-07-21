import storage from 'good-storage'

function inertArray (arr, item, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index > -1) return
  arr.unshift(item)
  if (maxLen && arr.length > maxLen) arr.pop()
}
function deleteFromArray (arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
export function save (item, key, compare, maxLen) {
  const list = storage.get(key, [])
  inertArray(list, item, compare, maxLen)
  storage.set(key, list)
  return list
}

export function remove (key, compare) {
  const list = storage.get(key, [])
  deleteFromArray(list, compare)
  storage.set(key, list)
  return list
}

export function load (key) {
  return storage.get(key, [])
}
