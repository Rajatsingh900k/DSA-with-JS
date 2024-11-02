function linerSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target)
            return i;
    }
    return -1;
}

const myArr=[2,35,1,3,5,61,345,0];
const target=-1;

if(linerSearch(myArr,target)!==-1){
    console.log(`Target ${myArr[linerSearch(myArr,target)]} found at index ${linerSearch(myArr,target)}.`);
}
else{
    console.log("Target is not present in the array.")
}