
class Node{
    contructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    contructor(){
        this.head = null;
    }

    addFront(value){
        newNode = new Node(value);
        newNode.next  = this.head;
        this.head = newNode;
        return this;
    }

    removeFront(){
        if(this.head){
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