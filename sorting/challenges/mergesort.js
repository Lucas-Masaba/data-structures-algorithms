// Create merge function
merge(arr1, arr2) {
  resultArr = []
  // Create variables for the two arrays
  variable i = 0
  variable j = 0
  // Loop through the arrays
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]){
      // swap
      results.push(arr[j]) 
      i++
    } else {
      results.push(arr[i]) 
      j++
    }
  }
  return 
}
