function merge(left, right){
    const result=[]
    let i=0;
    let j=0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }
        else{
            result.push(right[j])
            j++;
        }
    }

    while(i<left.length){
        // instead of this logic we can take help of inbuilt function of JS to achieve similar things
        // result.push(...left.slice(i));:- this will simply push the left over elements of left array on the result.
        result.push(left[i]);
        i++;
    }
    while(j<right.length){
        result.push(right[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    if(arr.length<=1)//base case
        return arr;
    
    const middle=Math.floor(arr.length/2);

    const left=arr.slice(0,middle);
    const right=arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

const arr=[23,54,11,0,6,2,34,588,1];
console.log("Array before mergeSort: ",arr);
console.log("Array after mergeSort: ",mergeSort(arr));
