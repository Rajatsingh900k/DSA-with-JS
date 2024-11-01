//steps
// 1.Convert original string into array of string seperated by " "
// 2.for each substring we are updating the first character of the word
// 3.then again converting it into original string.

function sentenceCapitalization(str){
    str=str.toLowerCase();
    const stringArray=str.split(" ");
    for(let i=0;i<stringArray.length;i++){
        let substr=stringArray[i];
        
        if(substr.length>0){
            stringArray[i]=substr.charAt(0).toUpperCase()+substr.slice(1);
        }
        //working of .charAt(index), .toUpperCase(), .slice(start index,end index){end index-1 tak reach karega sirf}
        //.charAt(index):- this give the character at given index.
        //.toUpperCase():- method of string which converts the string to uppercase.
        //.slice():- this is common method of both string and array which is used to select a specific part of the string.
    }
    const finalString=stringArray.join(" ");
    return finalString;
}

const names="this is an sample string for sentence capitalization function"
console.log(sentenceCapitalization(names));