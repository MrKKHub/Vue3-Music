// 洗牌算法
export function shuffle (source) {
  const arr = source.slice()
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomInt(i)
    console.log(j)
    swap(arr, i, j)
  }
  console.log(arr)
  return arr
}

function getRandomInt (max) {
  return Math.floor(Math.random() * (max + 1))
}
function swap (arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
