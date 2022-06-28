const test = require('./test');

test.solve();

class Node{
    data;
    left = null;
    right = null;
    constructor(d){
        this.data = d;
    }
}