// ✓ Ques 2: Given a string s containing just the characters '(', ')', '(', ')', '[' and ']',
// determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// ✔ Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// - Input: "()" // Output: true


// "Input: "()[]{}" // Output: true


// - Input: "(]" // Output: false

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

const inputString1="()[]{}";//valid?===>true;
const inputString2="{}{}(]";//valid?===>false;

function isValid(inputString){
    const st=new Stack();
    //converting string into array
    const myArr=inputString.split("");
    for(let i=0;i<myArr.length;i++){
        if(st.isEmpty()){
            st.push(myArr[i]);
        }
        else if(!st.isEmpty() && (st.peek()==='(' && myArr[i]===')'))
        {
            st.pop();
        }
        else if(!st.isEmpty() && (st.peek()==='{' && myArr[i]==='}'))
        {
            st.pop();
        }
        else if(!st.isEmpty() && (st.peek()==='[' && myArr[i]===']'))
        {
            st.pop();
        }
    }
    return st.isEmpty();
}

console.log(isValid(inputString2));


