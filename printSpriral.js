function printSpiral(A){
    let t=0;
    let b= A.length-1;
    let right = A[0].length-1;
    let left = 0;
while(t<=b && right >= left){
    for(j=left; j<=right; j++){
        console.log(A[t][j]);
    }
    t++;
    for(i=t;i<=b;i++){
        console.log(A[i][right]);
    }
    right--;

    for(j=right; j>=left; j-- ){
        console.log(A[b][j]);
    } 
    b--;

    for(i=b; i>=t; i--){
        console.log(A[i][left]);
    }
    left++;
}    
}

let a = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
printSpiral(a);
