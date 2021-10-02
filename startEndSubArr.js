// print end and start index of subarrays of length k

function startEndIndex(a, k){
  let n = a.length;
  for(i=0;i<=n-k;i++){
     console.log(i,i+k-1); 
  }
}

let a = [3,2,1,4,6,1,3,0,1];
let k = 3;
startEndIndex(a, k);