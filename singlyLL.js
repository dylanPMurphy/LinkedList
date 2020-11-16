
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

    max(){
        if(this.head==null){
            return null;
        }
        else{
            var temp = this.head;
            var max = 0;
            while(temp!=null){
                if(temp.value> max){
                    max = temp.value;
                }
                temp = temp.next;
            }
            return max;
        }
    }

    min(){
        if(this.head==null){
            return null;
        }
        else{
            var temp = this.head;
            var min = Infinity;
            while(temp!=null){
                if(temp.value < min){
                    min  = temp.value;
                }
                temp = temp.next;
            }
            return min
        }
    }
    avg(){
        if(this.head==null){
            return null;
        }
        else{
            var temp = this.head;
            var count = 0;
            var sum = 0;
            while(temp!=null){
                count++;
                sum+=temp.value;
                temp = temp.next;
            }
            return sum/count;
        }
    }
}


var sll = new SLL();
sll.addFront(1);

sll.addFront(2);
console.log(sll.front());

sll.addFront(3);
sll.addFront(4);
console.log(sll.contains("Third"));
console.log(sll.length())
console.log(sll.display());
console.log(sll.min());
console.log(sll.max());

console.log(sll.avg());

// console.log(sll.front());
// sll.removeFront()
// console.log(sll.front());
// sll.removeFront()
// console.log(sll.front());
// sll.removeFront()
