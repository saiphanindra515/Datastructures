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

module.exports = {
    singleNumber : function(){
        let q = new dequeue();
        q.pushBack(10);
        q.print();
    }
}

