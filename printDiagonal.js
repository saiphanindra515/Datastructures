// print diagnol from left to right & right to left

// [[1,2,3],[4,5,6],[7,8,9]]


function printDiagonal(arr){
    let n = arr.length;
    for(i=0;i<n;i++){
        console.log(arr[i][i]);
    }
    let k=0;
    let j = n-1;
    while(k<n && j >=0){
        console.log(arr[k][j]);
        k++;
        j--;
    }
}

const arr = [[1,2,3],[4,5,6],[7,8,9]];
printDiagonal(arr);