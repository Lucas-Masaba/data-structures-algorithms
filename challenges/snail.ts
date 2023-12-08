// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// array = [[1,2,3]]
// snail(array) #=> [1,2,3]

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// array = [[]]
// snail(array) #=> []

// array = [[1,   2,  3,  4,  5],
//          [6,   7,  8,  9, 10],
//          [11, 12, 13, 14, 15],
//          [16, 17, 18, 19, 20],
//          [21, 22, 23, 24, 25]]
// snail(array) #=> [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];

// 1 create a results array
// 2 loop through the first array in the 2d array
// 3 get the last item on the other arrays except the last one
// 4 reverse the last array
// 5 get the first item of each array except the first one
// 6 repeat the process again but with the first and last array excluded


const snail = (array: number[][]): number[] => {
  
  let results: number[] = []
  let k: number = array.length
  while(array.length)  {
    const shiftedArray = array.shift();
    if (shiftedArray !== undefined) {
      results.push(...shiftedArray);
    }
    for(let i = 0; i < array.length; i++){
      const popped = array[i].pop()
      if(popped !== undefined) results.push(popped)
    }

    results.push(...(array.pop() || []).reverse())
    for(let i = array.length - 1; i >= 0; i--){
      const shifted = array[i].shift()
      if(shifted !== undefined) results.push(shifted)
    }
  }
  return results 
}

console.log(snail([[1,2,3],[8,9,4],[7,6,5]]))