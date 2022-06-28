const solve = require('./solve');

function dequeue(){
    collection = [];
    end = -1;
    this.enqueue = function(ele){
        collection.push(ele);
        end++;
    }
    this.dequeue = function(){
        end--;
        return collection.pop();
    }
    this.front = function(){
        return collection[0];
    }
    this.pushBack = function(ele){
        collection.push(ele);
        end++;
    }
    this.back = function(){ return collection[end] }
    this.size = function(){
        return collection.length;
    }
    this.isEmpty = function(){
        return (collection.length === 0);
    }
    this.print = function(){
        console.log(collection);
    }
}

const q = new dequeue();
const arr = [10,7,11,8,56,76,3,4,90,6,5];
k=3
ans = [];

for(i=0; i<k; i++){
    while(!q.isEmpty() && q.back() < arr[i]){
        q.dequeue();
    }
    q.pushBack(arr[i]);
}
q.print();
console.log(q.back());
ans.push(q.front());

l = 1; r=k;
n = arr.length;

while(r<n){
    if(!q.isEmpty() && q.front() === arr[l-1]){
        q.dequeue();
    }
    while(!q.isEmpty() && q.back() < arr[r]){
        q.dequeue();
    }
    q.pushBack(arr[r]);
    r++;
    l++;
    ans.push(q.front());
}

console.log(ans);

solve.singleNumber();









 