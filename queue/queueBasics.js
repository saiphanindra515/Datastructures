function queue(){
    collection = [];
    this.enqueue = function(ele){
        collection.push(ele);
    }

    this.dequeue = function(){
        collection.shift()
    }

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }
    this.rear = function(){
        const len = collection.length
        if (len > 0)
        return collection[len - 1];

        return null;
    }

}