// function mergeSort(A, result, low, high){
//     if(low === high){
//         return;
//     }
    
//     const mid = parseInt((low+high)/2);
//     mergeSort(A, result, low, mid);
//     mergeSort(A, result, mid+1, high);
//     merge(A, result, low, mid, high);
// }

// function merge(A, result, low, mid, high){
//     let i = low;
//     let j = mid+1;
//     let k = low;
//     while(i<=mid && j<=high){
//         if(A[i] <= A[j]){
//             result[k++] = A[i++];
//         }else{
//             result[k++] = A[j++];
//         }
//     }
    
//     while(i<=mid){
//         result[k++] = A[i++];
//     }
    
//     while(j<=high){
//         result[k++] = A[j++];
//     }
    
//     for(l=low;l<=high;l++){
//         A[l] = result[l];
//     }
// }


function merge(arr, result, low, mid, high){
    let i = low, j = mid + 1, k= low;
    while (i<=mid && j<=high){
        if (arr[i] <= arr[j]){
            result[k++] = arr[i++];
        }else{
            result[k++] = arr[j++];
        }
    }

    while (i<=mid){
        result[k++]=arr[i++];
    }
    while (j<=high){
        result[k++] = arr[j++];
    }

    for(l=low;l<=high;l++){
        arr[l]=result[l];
    }
}

function mergesort(arr, result, low, high){
    if (low === high){
        return;
    }
    const mid = parseInt((low + high)/2);
    mergesort(arr, result, low, mid);
    mergesort(arr, result, mid+1, high);
    merge(arr, result, low, mid, high);
}



function minDiff(A){
    if(A.length === 1){
        return A[0];
    } 
    let result = []; 
    mergesort(A, result, 0, A.length-1);
    console.log(A);
    // let minDiff = A[1] - A[0];
    // for(i=0;i<A.length-1;i++){
    //     diff = A[i+1]-A[i];
    //     minDiff = minDiff > diff ? diff : minDiff;
    // }
    // return minDiff;
}

console.log(minDiff([5,17,100,11]));