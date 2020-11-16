
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addFront(value){
        console.log(value)
        var newNode = new Node(value);
        console.log(newNode.value)
        if(this.head != null){
            
            newNode.next  = this.head;
            this.head = newNode;
            return this;
        }
        else{
            this.head = newNode;
        }
    }

    removeFront(){
        if(this.head!= null){
            this.head = this.head.next;
        }
        else{
            return null;
        }

    }

    front(){
        return this.head.value;
    }
}


// var sll = new SLL();
// sll.addFront("First");
// console.log(sll.front());

// sll.addFront("Second");
// sll.addFront("Third");
// console.log(sll.front());
// sll.removeFront()
// console.log(sll.front());
// sll.removeFront()
// console.log(sll.front());
// sll.removeFront()
