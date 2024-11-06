//Types of Loops in JS

//1. For loop

//2. while loop

//3. do-while loop

//4. for-in loop 
//syntax: for(key in object/array)
//        {
//                ...
//        }
//

//5.for-of loop: The for-of loop is used to iterate over iterable objects like arrays, strings, 
//               or other objects that implement the iterable protocol.
//for (variable of iterable) {
//     code to be executed
//}

function printArr(arr,option){
    switch(option){
        //for loop
        case 1:{
            for(let i=0;i<arr.length;i++){
                console.log(arr[i]);
            }
            break;
        }
        //while loop
        case 2:{
            let i=0;
            while(i<arr.length){
                console.log(arr[i]);
                i++;
            }
            break;
        }
        //do-while loop
        case 3:{
            let i=0;
            do{
                console.log(arr[i]);
                i++;
            }while(i<arr.length);
        }
        //for-in loop
        case 4:{
            for(key in arr){
                // console.log(key)//prints index
                // console.log(arr[key])//prints value(or elements)
                console.log(`key: ${key} and value: ${arr[key]}`);
            }
            break;
        }
        //for-of loop
        case 5:{
            for(const item of arr){
                console.log(item);
            }
            break;
        }
    }
}



const arr=[1,2,3,'Rajat'];

//push(valueToBeInserted) method
//insertes value at the last of the array.

//arr.push('Love');
//printArr(arr,1);

//unshift(valueToBeInserted) method
//insertes value at the front of the array.

//arr.unshift('Hello');
//printArr(arr,1);

//pop() method
//removes item from the end of the array.

// arr.pop()
// printArr(arr,1);

//shift() method
//removes item from the front of the array.

// arr.shift();
// printArr(arr,1);









//############################################################################################################################################//







//Some other important methods fo array
//1.map
//2.filter
//3.reduce
//4.concat
//5.slice
//6.splice



// map:- The map() method in JavaScript is used to create a new array by applying a provided function to every element in the original array. 
//It doesn't modify the original array but returns a new array with the transformed values.

//syntax: array.map(function(currentValue, index, array), thisArg);
//Return Value:
//A new array with each element being the result of the callback function.
//map returns an array of same size
const arr2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const newArr2=arr2.map((numbers)=>{
        return numbers*2;
})

// printArr(newArr2,1);

















// filter:- The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. 
// This method doesn't modify the original array but returns a new array with the elements that meet the condition specified in the 
// callback function

//syntax: array.filter(function(currentValue, index, array), thisArg);
// Return Value:
// A new array with all elements that pass the test. If no elements pass, it returns an empty array.
//filter returns an array of size which may or may not equal to the size of the original array.

const numArr=[];

//filling the array
for(let i=1;i<=20;i++){
    numArr.push(i);
}

const newNumArr=numArr.filter((items)=>{
    if(items%2===0)
        return items;
})

// printArr(newNumArr,5);


//reduce() method
//The reduce() method in JavaScript executes a reducer function on each element of the array, 
//resulting in a single output value. It’s used to accumulate values from an array into a single result.
//syntax: array.reduce(function(accumulator, currentValue, index, array), initialValue);
// Return Value:
// The single value that results from the reduction process.

const numbers=[1,2,3,4,5,6,7,8,9,10];

//initially the accuulator has first element of the array(or the element which is pointed by the currentValue)
const sum=numbers.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
})
// console.log(`The sum of array is ${sum}`);


//concat() method
//The concat() method in JavaScript is used to merge two or more arrays. 
//It doesn't modify the original arrays but returns a new array containing elements from the original arrays.

//syntax: const newArray = array1.concat(array2, array3, ..., arrayN);
// Return Value:
// A new array that includes the elements of the provided arrays or values in the order they were passed.

//Note: On changing the order of concatanating arrays, the order of resultant array will also get changed

//concatnating two arrays.
const arr4=[1,2,3];
const arr5=[4,5,6];

const concatenatedArray=arr4.concat(arr5);
// console.log(`Result of arr4.concat(arr5):`);
// printArr(concatenatedArray,1);

const concatenatedArray2=arr5.concat(arr4);
// console.log(`Result of arr5.concat(arr4):`);
// printArr(concatenatedArray2,1);

//concatnating multiple arrays.

const arr6=[7,8,9];
const concatenatedArray3=arr4.concat(arr5,arr6);
// console.log(`Result of multiple concatanation:`);
// printArr(concatenatedArray3,1);


//slice() method
// The slice() method in JavaScript is used to extract a portion of an array without modifying the original array. 
// It returns a shallow copy of a part of the array, starting from a given start index up to, but not including, the end index.

//syntax: array.slice(start, end);
// Return Value:
// A new array containing the extracted elements. The original array remains unchanged.

const arrayToBeSliced=[0,1,2,3,4,5,6,7,8,9];
const slicedArray=arrayToBeSliced.slice(1,9);
// console.log('Array after slicing: ')
// printArr(slicedArray,1);



//splice() method
//The splice() method in JavaScript is used to add, remove, or replace elements in an array. 
//Unlike the slice() method, splice() modifies the original array

//syntax: array.splice(start, deleteCount, item1, item2, ..., itemN);
// Return Value:
// An array containing the deleted elements, or an empty array if no elements were removed.

const myArr3=[1,2,3,4,5,6,7,8,9];

//removing(or deleting) elements of array using splice:

//const removedElements=myArr3.splice(1,5);
// console.log('removed elements: ')
// printArr(removedElements,1);
// console.log('modified array: ');
// printArr(myArr3,2);


//adding elements using splice() method
//string index=2, numberOfElementsToBeDeleted=0, rest are the items to be added.
myArr3.splice(2,0,44,55,66,77,88);
console.log('Array After adding elements, 44,55,66,77,88 strating at index 2');
printArr(myArr3,1);