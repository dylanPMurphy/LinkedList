
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
}