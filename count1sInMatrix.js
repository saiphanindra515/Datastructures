function calculateMatrix(A){
    const n = A.length;
    let row = 0;
    let col = A[0].length-1;
    let maxRow;
    while(row < n && col >=0){
        console.log(row,col);
        if(A[row][col] === 0){
            row++;
        }else{
            maxRow = row;
            col--;
        }
    }
    
    return maxRow;
}

let a = [
    [0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1]
  ];

console.log(calculateMatrix(a));  