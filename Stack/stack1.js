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


const myStack = new Stack();//creating object.

for(let i=0;i<10;i++){
    myStack.push(i);
}

for(let i=0;i<11;i++){
    console.log(myStack.pop());
}
