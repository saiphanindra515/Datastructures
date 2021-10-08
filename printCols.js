// given a Square matrix print sum of cols.

function sumOfCols(arr){
    const rowLength = arr[0].length;
    for(i=0; i<rowLength; i++){
        sum = 0;
        for(j=0; j<arr.length; j++){
            sum += arr[j][i];
        }
        console.log("ith col sum "+ sum);
    }
}

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

sumOfCols(arr);