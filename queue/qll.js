class Node{
    data;
    next = null;
    constructor(ele){
        this.data = ele;
    }
}

class queue{
    head = null;
    tail = null;

    enqueue(ele){
        const n = new Node(ele);
        if (this.head == null){
            this.head = n;
            this.tail = n;
            return;
        }
        this.tail.next = n;
        this.tail = this.tail.next;
    }

    dequeue(){
        if (this.head == null){
            return null;
        }
        
    }
}