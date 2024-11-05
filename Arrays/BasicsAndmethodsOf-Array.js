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

//5.for-of loop: The for-of loop is used to iterate over iterable objects like arrays, strings, or other objects that implement the iterable protocol.
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








//###########################################################//







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
// This method doesn't modify the original array but returns a new array with the elements that meet the condition specified in the callback function

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

