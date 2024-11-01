function twoSum(arr,target){
    const myMap=new Map();
    for(let i=0;i<arr.length;i++){
        myMap.set(arr[i],i);
    }
    const sortedArr=arr.sort((a,b)=>a-b);
    //sort method in js doesn't work as it works in cpp or java or python.
    /*
        To make the sort method work properly for numbers we pass comparion into the sort method... 
        1. The comparison function takes two arguments, a and b.
        2. Returning a negative value (e.g., a - b) means that a should come before b.
        3. Returning a positive value (e.g., b - a) means that b should come before a.
        4. Returning zero means that their order remains unchanged.
    */
    const finalArr=[];
    let i=0,j=arr.length-1;
    while(i<j){
        const sum=sortedArr[i]+sortedArr[j];
        if(sum==target){
            const tempArr=[];
            tempArr.push(myMap.get(sortedArr[i]));
            tempArr.push(myMap.get(sortedArr[j]));
            finalArr.push(tempArr);
            i++,j--;
        }
        else if(sum>target){
            j--;
        }
        else{
            i++;
        }
    }
    return finalArr;
}

const myArr=[2,7,11,15];
const target=9;
console.log(twoSum(myArr,target));