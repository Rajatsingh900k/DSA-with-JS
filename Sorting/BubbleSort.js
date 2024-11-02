// 1. Start with an array of numbers that you want to sort.
// 2. Loop through the array from the first element to the second-to-last element:
//     - For each element in this loop, compare it with the element next to it.
//     - If the current element is greater than the next element, **swap** them.
// 3. Repeat the process for each element in the array.
// 4. Each time, the largest unsorted element “bubbles up” to its correct position.
// 5. Continue looping through the array, decreasing the range by one after each pass, as the largest elements move to their sorted positions at the end.
// 6. Stop when no swaps are needed in a complete pass through the array, meaning the array is fully sorted.

// - Time Complexity: Worst case is O(n^2), where (n) is the number of elements.
// - Space Complexity: (O(1)) as it’s an in-place sorting algorithm.

// Bubble Sort is not the most efficient, but it's simple and works well for small datasets.

//Basically 2 loops use hone hai...
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1])
            {
                //swapping
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}

const arr=[4,2,1,6,4,7];
console.log('Array before sorting: ', arr);
bubbleSort(arr);
console.log('Array after sorting: ', arr);


