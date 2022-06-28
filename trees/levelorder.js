function levelOrder(node){
    let q = [];
    if (node){
        q.push(node);
    }else{
        return;
    }
    while(q.length > 0){
        const n = q.shift();
        console.log(n.data);
        if (n.left){
            q.push(n.left);
        }
        if(n.right){
            q.push(n.right);
        }
    }


}