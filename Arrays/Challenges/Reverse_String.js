// let myName="hello";

// function reverseString(string){
//     let i=0;
//     let j=string.length-1;
//     while(i<=j){
//         //swapping
//         let temp=string[i];
//         string[i]=string[j];
//         string[j]=temp;
//         i++;
//         j--;
//     }
//     return string;
// }
// console.log(reverseString(myName));


//Note: This way of reversing a String won't work because this is JS and no CPP or JAVA.
//      To reverse the string we have to convert the string into array first using ".split()" method then we can reverse the that array
//      Then again convert that reverse array back into the string using ".join()" method to obtain the reversed string.


const myName="Rajat";

reversedString=(str)=>{

    newCharArray=str.split("");//converting string into array of characters ['R','a','j','a','t']
    
    let i=0;
    let j=newCharArray.length-1;
    
    //reversing logic
    while(i<=j){
        //swapping
        let temp=newCharArray[i];
        newCharArray[i]=newCharArray[j];
        newCharArray[j]=temp;
        i++;
        j--;
    }
    
    str=newCharArray.join("");//converting the array of characters back into the string
    return str;
}
console.log(reversedString(myName));