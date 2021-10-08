// Given 2D array print all elements row by row.

function printTwoDemensionArr(arr){
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
printTwoDemensionArr(arr);