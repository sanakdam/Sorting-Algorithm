const swap = (arr, xi, xj) => {
  let temp = arr[xj]
  arr[xj] = arr[xi]
  arr[xi] = temp
}

const bubbleSort = (arr) => {
  let sorted = false

  while (!sorted) {
    sorted = true

    for (let i = 0; i < arr.length - 1; i++) {
      let next = i + 1
      if (arr[i] > arr[next]) {
        sorted = false
        swap(arr, i, next)
      }
    }

    if (sorted) return arr
  }

  return arr
}

const sorted = bubbleSort([5, 1, 4, 2, 8])
console.log(sorted)