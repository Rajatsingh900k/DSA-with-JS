function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Select the pivot (last element of the array)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // Partitioning: Loop through all elements except the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements less than pivot go to the left array
        } else {
            right.push(arr[i]); // Elements greater than or equal to pivot go to the right array
        }
    }

    // Recursively apply quickSort on left and right subarrays
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [64, 25, 12, 22, 11];
console.log("Array before sorting: ",arr);
console.log("Array after sorting ", quickSort(arr)); 