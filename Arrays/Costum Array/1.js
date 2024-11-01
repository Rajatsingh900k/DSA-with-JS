//To create custom array we will be using classes
class MyArray{
    
    //we use the function 'constructor' to define the ctor in js.  
    constructor(){
        this.length=0;
        this.data={};
    }

    //push method
    push(item){
        this.data[this.length]=item;
        this.length++;
        return this.length;
    }

    //get method
    get(index){
        return this.data[index];
    }

    //pop method
    pop(){
        const itemDeleted=this.data[this.length-1];
        delete this.data[this.length-1];//using 'delete' keyword to delete the item.
        this.length--;
        return itemDeleted;
    }

    //shift method
    shift(){
        //Similar to the shift k-elements of LeetCode.
        const firstItem=this.data[0];
        for(let i=0;i<this.length-1;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return firstItem;
    }
    //delete by index
    deleteByIndex(index){
        const itemTobeDeleted=this.data[index];
        delete this.data[index];
        for(let i=index;i<this.length-1;i++)
        {
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
        return itemTobeDeleted;
    }
}

const myNewArray=new MyArray();//creating instance of the array.

myNewArray.push('I');
myNewArray.push('Love');
myNewArray.push('You');
myNewArray.push('Anushka');
// myNewArray.shift();
myNewArray.deleteByIndex(1);
for(let i=0;i<myNewArray.length;i++)
{
    console.log(myNewArray.get(i));
}
console.log(myNewArray) 