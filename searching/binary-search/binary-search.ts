const binarySearch = (array: number[], val: number, start = 0, end = array.length - 1): number => {
  // add whatever parameters you deem necessary - good luck!

  let pivot = Math.floor((start + end) / 2)
  console.log(pivot)

  if(array[pivot] < val){
    start = pivot + 1
  } else if(array[pivot] > val){
    end = pivot - 1
  } else if(array[pivot] === val) {
    console.log(array[pivot])
    return array[pivot]
  }
  return binarySearch(array, val, start, end)
}

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1