
class Node{
    
    constructor(value){
        this.head=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        this.head=new Node(value);
        this.tail=this.head;

        this.length=1;
    }

    push(value){
        let newNode=new Node(value);
        //if the linked list is empty...
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }

    pop(){
        
        if(!this.head){
            return null;
        }

        let temp=this.head;
        let prev=this.head;

        while(temp.next){
            prev=temp;
            temp=prev.next;
        }
        
        this.tail=prev;
        this.tail.next=null;
        this.length--;

        if(this.length===0){
            this.head=null;
            this.tail=null;
        }

        return temp;
    }
}

const myLinkedList=new LinkedList(1);
myLinkedList.push(10);
myLinkedList.pop();

console.log(myLinkedList);