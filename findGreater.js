function mergeSort(A, low , high, result){
    if(low === high){
        return;
    }

    const mid = parseInt((low+high)/2);
    mergeSort(A, low, mid, result);
    mergeSort(A, mid+1, high, result);
    merge(A, low, mid, high, result );
}

function merge(A, low, mid, high, result){
let i = low;
let j = mid+1;
let k = low;

while(i<=mid && j<=high){
    if(A[i]<=A[j]){
        result[k++] = A[i++];
    }else{
        result[k++] = A[j++];
    }
}

while(i<=mid){
    result[k++] = A[i++];
}

while(j<=high){
    result[k++] = A[j++];
}

for(l=low;l<=high; l++){
    A[l] = result[l];
}
}


function findGreaterEle(A){
    let result = [];
    mergeSort(A, 0, A.length-1, result);
    for(y=0; y<A.length; y++){
        console.log(A[y]);
    }
    let n = A.length;
    let prev;
    let count = 0;
    
    for(i=n-1; i>=0; i--){
        if(prev && prev === A[i]){
            count++;
        }else{  
            if(count === A[i]){
                return 1;
            }
            count++;
        }
    }
    
    return -1;
}

let res = [ -4, 7, 5, 3, 5, -4, 2, -1, -9, -8, -3, 0, 9, -7, -4, -10, -4, 2, 6, 1, -2, -3, -1, -8, 0, -8, -7, -3, 5, -1, -8, -8, 8, -1, -3, 3, 6, 1, -8, -1, 3, -9, 9, -6, 7, 8, -6, 5, 0, 3, -4, 1, -10, 6, 3, -8, 0, 6, -9, -5, -5, -6, -3, 6, -5, -4, -1, 3, 7, -6, 5, -8, -5, 4, -3, 4, -6, -7, 0, -3, -2, 6, 8, -2, -6, -7, 1, 4, 9, 2, -10, 6, -2, 9, 2, -4, -4, 4, 9, 5, 0, 4, 8, -3, -9, 7, -8, 7, 2, 2, 6, -9, -10, -4, -9, -5, -1, -6, 9, -10, -1, 1, 7, 7, 1, -9, 5, -1, -3, -3, 6, 7, 3, -4, -5, -4, -7, 9, -6, -2, 1, 2, -1, -7, 9, 0, -2, -2, 5, -10, -1, 6, -7, 8, -5, -4, 1, -9, 5, 9, -2, -6, -2, -9, 0, 3, -10, 4, -6, -6, 4, -3, 6, -7, 1, -3, -5, 9, 6, 2, 1, 7, -2, 5 ]

findGreaterEle(res)