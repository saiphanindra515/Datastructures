// find max sum of sub arr of length k.

function maxSum(A, k){
//    for(i=1; i<A.length; i++){
//        A[i] += A[i-1];
//    }
//    let max = A[k-1];
//    let n= A.length;
//    for(j=1; j<=n-k; j++){
//      max = max > A[j+k-1]-A[j-1] ? max :  A[j+k-1]-A[j-1];
//    }
//    return max;

// approach 2
let sum = 0;
for(i=0; i<k; i++){
    sum += A[i];
}
let n = A.length;
for(j=1; j<=n-k; j++){
    let subArrSum = (sum - A[j-1]) + A[j+k-1];
    sum = sum > subArrSum ? sum : subArrSum;
}
return sum;

}

//
let arr = [3,4,5,6,7,1,0,3];
//[3,7,12,18,25,26,26,29];
console.log(maxSum(arr, 3));
//startindex = i;
//endIndex = i+k-1;