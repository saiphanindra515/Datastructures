class Node{
    data;
    next = null;
    constructor(x){
        this.data = x;
    }
}

class LL{
    start = null;
    constructor(){}
    addNode(data){
        const node = new Node(data);
        if (this.start == null){
            this.start = node;
            return;
        }
        let t = this.start;
        while(t.next !== null){
           t = t.next; 
        }
        t.next = node;
    }
    printNode(){
        let temp = this.start;
        let str = '';
        while(temp){
            str += `${temp.data}----> `;
            temp = temp.next;
        }
        console.log(str);
    }
    size(){
        let temp = this.start;
        let count = 0;
        while(temp){
            count++;
            temp = temp.next;
        }
        return count;
    }

    getKthElement(pos){
        let k = pos;
        let temp = this.start;
        while(temp && k>0){
            console.log(temp.data);
            temp = temp.next;
            k--;
        }
        if(!temp || k<0){
            console.log(null);
        }
        else{
            console.log(`${pos}th ele is ${temp.data}`);     
        }
    }

    insertNodeAtKthPos(pos, data){
        if (pos < 0 || pos > this.size()){
            console.log('no insertion possible');
            return;
        }
        if(this.start == null && pos>0){
            return;
        }
        const n = new Node(data);
        if (pos === 0){
            n.next = this.start;
            this.start = n;
            return;
        }
        let temp = this.start;
        for(let i=1; i < pos; i++){
            temp = temp.next;
        }
        n.next = temp.next;
        temp.next = n;

    }

    insertInSortedList(ele){ 
        const n = new Node(ele);
        if(this.start === null || this.start.data > ele){
            n.next = this.start;
            this.start = n;
            return;
        }
        let temp = this.start;
        while(temp.next && temp.next.data < ele){
            temp = temp.next;
        }
        n.next = temp.next;
        temp.next = n;
    }
}

const ll = new LL();
ll.addNode(0);
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(7);
ll.addNode(9);
//console.log(ll.printNode());
//ll.getKthElement(-1);
ll.insertInSortedList(6);
ll.printNode();
