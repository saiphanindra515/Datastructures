module.exports = {
    solve: function(x){
        if (x == 1){
            console.log(x);
            return;
        }
        this.solve(1);
    }
}