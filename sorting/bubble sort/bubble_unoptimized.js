// // UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr){
//   for(let i = arr.length; i > 0; i--){
//     for(let j = 0; j < i - 1; j++){
//       console.log(arr, arr[j], arr[j+1]);
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;         
//       }
//     }
//   }
//   return arr;
// }
// ES2015 Version
function bubbleSort(arr) {
    let swap = function (arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
console.log(bubbleSort([3, 1, 7, 2, 4, 8, 6, 5]));
