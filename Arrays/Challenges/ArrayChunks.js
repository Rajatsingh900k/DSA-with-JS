function arrayChunks(arr,size){
    const chucked=[];
    let index=0;

    while(index<arr.length){
        const chunk=arr.slice(index,index+size);
        chucked.push(chunk);
        index+=size;
    }
    return chucked
}

const arr=[1,2,3,4,5];
console.log(arrayChunks(arr,2));