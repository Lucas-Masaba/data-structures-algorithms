// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

function averagePair(arr: number[],num: number): boolean{
  let start = 0
  let end = arr.length - 1

  while(arr[start] < arr[end]){
      let avg = (arr[start] + arr[end]) / 2
      if(avg > num){
          end--
      } else if(avg < num){
          start++
      } else if(avg === num){
          return true
      }
  }
  return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) 