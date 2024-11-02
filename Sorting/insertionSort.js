// Here’s the algorithm for **Insertion Sort**:

// 1. Start with the second element in the array (since the first element is considered sorted).
// 2. Loop through the array from the second element to the last element:
//     - Take the current element and call it the “key.”
//     - Compare the “key” with the elements in the sorted portion of the array (elements before it).
//     - Move each element that is larger than the “key” one position to the right to make space for the “key.”
// 3. Insert the “key” in its correct position within the sorted portion.
// 4. Repeat until the entire array is sorted.

// - Time Complexity: Worst and average case are O(n^2), but best case (already sorted) is \(O(n)\).
// - Space Complexity:(O(1) as it’s an in-place sorting algorithm.

// Insertion Sort is efficient for small or partially sorted arrays and is often used in hybrid sorting algorithms like Timsort.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0...i-1] that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Insert the key in its correct position
        arr[j + 1] = key;
    }
}

let arr = [0,6,-1,2,-55,100];

console.log('Array before sorting: ',arr);
insertionSort(arr);
console.log('Array after sorting: ',arr);
