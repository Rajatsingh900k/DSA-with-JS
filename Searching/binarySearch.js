function binarySearch(arr,target){
    let i=0;
    let j=arr.length-1;

    while(i<=j){
        let mid=Math.floor((i+j)/2);
        if(arr[mid]===target)
            return mid;
        else if(arr[mid]>target){
            j--;
        }
        else{
            i++;
        }
    }
    return -1;
}

const myArr=[2,35,1,3,5,61,345,0];
const target=345;


if(binarySearch(myArr,target)!==-1){
    console.log(`Target ${myArr[binarySearch(myArr,target)]} found at index ${binarySearch(myArr,target)}.`);
}
else{
    console.log("Target is not present in the array.")
}