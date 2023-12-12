const swap = (arr: number[], idx1: number, idx2: number) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const bubbleSortChallenge = (arr: number[]): number[] => {
  for(let i = arr.length - 1; i >= 0; i--){
    for(let j = 0; j < i; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1)
      }
    }
  }
  return arr;

}

console.log(bubbleSortChallenge([5,2,7,3,9,1,0]))