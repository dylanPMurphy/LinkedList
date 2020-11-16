
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
        var newNode = new Node(value);
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

    contains(value){
        if(this.head==null){
            return false;
        }
        else{
            var temp = this.head;
            while(temp!=null){
                if(value == temp.value){
                    return true;
                }
                else{
                    temp = temp.next;
                }
            }
            return false;
        }
    }

    length(){
        if(this.head==null){
            return 0;
        }
        else{
            var temp = this.head;
            var count = 0;
            while(temp!=null){
                count++;
                temp = temp.next;
            }
            return count;
        }
    }
    
    display(){
        if(this.head==null){
            return null;
        }
        else{
            var temp = this.head;
            var out = '';
            while(temp!=null){
                out += temp.value;
                out+=", ";
                temp = temp.next;
            }
            return out;
        }
    }
}


var sll = new SLL();
sll.addFront("Zeroth");

sll.addFront("First");
console.log(sll.front());

sll.addFront("Second");
sll.addFront("Third");
console.log(sll.contains("Third"));
console.log(sll.length())
console.log(sll.display());
// console.log(sll.front());
// sll.removeFront()
// console.log(sll.front());
// sll.removeFront()
// console.log(sll.front());
// sll.removeFront()
