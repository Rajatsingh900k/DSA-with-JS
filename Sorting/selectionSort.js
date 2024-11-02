// 1. Start with an unsorted array.
// 2. Loop through the array starting from the first element up to the second-to-last element:
//     - Assume the first unsorted element is the smallest, and set it as the current minimum.
//     - For each element in the remaining unsorted portion, check if there’s an element smaller than the current minimum.
//     - If a smaller element is found, update the current minimum to that element.
// 3. Swap the smallest element found with the first element of the unsorted portion.
// 4. Repeat the process for the next position in the array until the entire array is sorted.

// - Time Complexity: Worst, average, and best cases are O(n^2) because it involves nested loops.
// - Space Complexity:O(1), as it’s an in-place sorting algorithm.

// Selection Sort is simple but not the most efficient. 
//It performs well with small datasets or where swapping operations are costly and comparison operations are relatively cheap.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // Assume the first unsorted element is the smallest
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];//swapping using destructring, you can swap them normally as you want.
        }
    }
}

let arr = [64, 25, 12, 22, 11];
console.log('Array before sorting: ',arr);
selectionSort(arr);
console.log('Array after sorting: ',arr); 
