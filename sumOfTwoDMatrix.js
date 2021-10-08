// Given two 2D Arrays, find the addition.
// square matrix
//

// check whether it is square matrix or not.
/* [               [                    
    [1,2,3]            [2,1,3],
    [4,5,6]            [6,4,5],
    [7,8,0]            [0,7,8] ]
] 

*/

function additionOfMatrix(arr1, arr2){
    if(checkDimension(arr1,arr2)){
        let resultant = new Array(arr1.length);
        let m = arr1[0].length;
        for(k=0; k<resultant.length; k++){
            resultant[k] = new Array(m).fill(0);
        }
        for(i=0; i<arr1.length; i++){
            for(j=0; j<m; j++){
                resultant[i][j] = arr1[i][j] + arr2[i][j];
            }
        }
        console.log(resultant);
    }
   
}

function checkDimension(arr1, arr2){
    const n1 = arr1.length;
    const n2 = arr2.length;
    if (n1 !== n2){
        return false;
    } 
    return findMaxLengthRow(arr1, arr2);
}

function findMaxLengthRow(arr1, arr2){
    const len = arr1[0].length;
    for(i=0;i<arr1.length;i++){
        let l1 = arr1[i].length;
        let l2 = arr2[i].length
        if((l1 !== l2)|| l1 !== len || l2 !== len){
            return false;
        }
    }
    return true;
}

const array1 =  [                                 
    [1,2,3],
    [4,5,6],            
    [7,8,0]  
] 

const array2 =  [                    
    [2,1,3],
    [6,4,5],
    [0,7,8] 
]
additionOfMatrix(array1, array2);