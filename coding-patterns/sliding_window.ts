function maxSubarraySum(arr: number[], num: number){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  console.log('Max sum before', maxSum)
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // console.log('i', i)
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    console.log(maxSum, tempSum)
  }
  console.log('The max sum', maxSum)
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
