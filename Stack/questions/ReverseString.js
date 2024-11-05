class Stack{
    
    constructor(){
        this.stack=[];//declaring a local variable called stack and we are initialising it with an enmpty array.
    
    }

    //push() method
    push(value){
        this.stack.push(value);
    }

    //pop() method
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty."
        }
        return this.stack.pop();
    }

    //isEmpty() method
    isEmpty(){
        if(this.size()===0)
            return true;
        
        return false;
    }

    //peek() method
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty."
        }

        return this.stack[this.size()-1];
    }

    //size() method
    size(){
        return this.stack.length;
    }

}

//Task Input: string="Hello World" ===> Output: Reverse_string="World Hello"

const myStack = new Stack();//creating object.
let str="Rajat Singh";

let myArr=str.split(" ");
let myArr2=[];
for(let i=0;i<myArr.length;i++){
    myStack.push(myArr[i]);
}

while(!myStack.isEmpty()){
    const peekElement=myStack.peek();
    myStack.pop();
    myArr2.push(peekElement);
}

str=myArr2.join(" ");
console.log(str);