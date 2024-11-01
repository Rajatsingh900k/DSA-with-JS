//function to reverse string
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


const word="racecar";
const word1='Anushka';
const word2='Rajat';
function isPalindrome(word){
    const reversedWord=reversedString(word);

    return word===reversedWord?true:false;
}

if(isPalindrome(word2)){
    console.log(word2+" is Palindrome");
}
else{
    console.log(word2+" is not Palindrome");
}