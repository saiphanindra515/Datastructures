function lpsarr(str){
    let lps = new Array(str.length);
    lps[0] = 0;
    for(let i=1; i<str.length; i++){
        let x = lps[i-1];
        while(str[i] != str[x]){
            if (x == 0){
                x = -1;
                break;
            }
            x = lps[x-1];
        }
        lps[i] = x+1;
    }
    console.log(lps);
}
lpsarr('abcyabcy');