// Given an array of size N, Find the subarray with least average of size k

// Input Format
// First argument contains an array A of integers of size N.
// Second argument contains integer k.


// Output Format
// Return the index of the first element of the subarray of size k that has least average.
// Array indexing starts from 0.

// A=[3, 7, 90, 20, 10, 50, 40]
// B=3

// output
// 3

function avg(A, B){
    let a = new Array(A.length).fill(0);
    a = [...A];
    let n = A.length;
    for(i=1;i<n;i++){
        a[i]+=a[i-1];
    }
    let minSum = a[B-1];
    let minIndex = 0;
    for(j=1;j<=n-B;j++){
        if(minSum > (a[j+B-1]-a[j-1])){
            minIndex = j;
            minSum = (a[j+B-1]-a[j-1]);
        }
    }
    return minIndex;
}

console.log(avg([ 18, 11, 16, 19, 11, 9, 8, 15, 3, 10, 9, 20, 1, 19 ], 1));