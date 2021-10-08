/* Given an array, arr[] of size N, the task is to find the count of array indices 
such that removing an element from these indices makes the sum of even-indexed 
and odd-indexed array elements equal.

IP: A=[2, 1, 6, 4]
OP: 1

Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1.
*/


function oddEvenPs(A){
    let oddPrefixSum = new Array(A.length).fill(0);
    let evenPrefixSum = new Array(A.length).fill(0);
    evenPrefixSum[0] = A[0];
    for(i=2;i<A.length;i+=2){
        evenPrefixSum[i] = evenPrefixSum[i-2]+A[i];
    }
    oddPrefixSum[1] = A[1];
    for(j=3; j<A.length; j+=2){
        oddPrefixSum[j] = oddPrefixSum[j-2]+A[j];
    }
    console.log(evenPrefixSum);
    console.log(oddPrefixSum);
}

oddEvenPs([2,1,6,4]);