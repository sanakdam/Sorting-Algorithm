const swap = (arr, xi, xj) => {
  let temp = arr[xi]
  arr[xi] = arr[xj]
  arr[xj] = temp
}

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i


    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j
    }

    swap(arr, i, lowest)
  }

  return arr
}

const stableSelectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i


    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j
    }

    let key = arr[lowest]
    while (lowest > i) {
      arr[lowest] = arr[lowest - 1]
      lowest--
    }

    arr[i] = key
  }

  return arr
}

const sorted = selectionSort([64, 25, 12, 12, 22, 11])
const stableSorted = stableSelectionSort([64, 25, 12, 12, 22, 11])

console.log(sorted)
console.log('stable sorted')
console.log(stableSorted)