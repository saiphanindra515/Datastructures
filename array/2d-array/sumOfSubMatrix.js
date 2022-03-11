/* 
  [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
  ]

*/

function sumOfMat(A,B){
    let r1 = B[0][0];
    let c1 = B[0][1];
    let r2 = B[1][0];
    let c2 = B[1][1];
    let sum = 0;
    for(let i=r1; i<=r2; i++){
        for(let j=c1; j<=c2; j++){
            sum += A[i][j];
        }
    }
    console.log(sum);
}

let arr =  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
let q = [[0,0],[2,2]];

sumOfMat(arr, q);