//To create custom array we will be using classes

class MyArray{
    
    //we use the function 'constructor' to define the ctor in js.  
    constructor(){
        this.length=0;
        this.data={};
    }

    //push method for this custom array
    push(value){
        this.data=value;
        this.length++;
        return this.length;
    }
}

const myNewArray=new MyArray();//creating instance of the array.
console.log(myNewArray.push(22));
