//steps:-
// 1. Convert number into string using 'toString()' method
// 2. Convert String into array using '.split()' method
// 3. Reverse the array
// 4. Convert array back to String
// 5. Convert string to number using parseInt() function{it takes string as input and radix(base which is by default 10)}
// 6. Return the number

function reverseInteger(num){
    const str=num.toString();
    const strArray=str.split("");
    const reversedStrArray=strArray.reverse();
    const reversedNumber=parseInt(reversedStrArray.join(""),10);
    return reversedNumber;
}

const numbers=12345;
console.log(reverseInteger(numbers));