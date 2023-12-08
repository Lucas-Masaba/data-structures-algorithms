const linearSearch = (arr: number[], val: number): number => {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return arr.indexOf(arr[i])
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1