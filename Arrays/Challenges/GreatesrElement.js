let arr = [10, 20, 4, 5, 6, 7, 8, 9];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max); 
