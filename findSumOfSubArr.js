/* Given an array & Q queries in every query there is start and
   end index
   print sum of sub arrays.     
*/
function sumOfSubArr(arr,queries){
    let a = [...arr];
    let result = [];
    for(i=1; i<arr.length; i++){
        a[i] += a[i-1];
    }
    let s,e;
    for(j=0;j<queries.length;j++){
         s = queries[j][0];
         e = queries[j][1];
        if(e < a.length){ 
            if ( s > 0 ){
                result.push(a[e]-a[s-1]);
            }else{
                result.push(a[e]);
            }
        }
    }
    return result; 
}

let a = [-3,6,2,4,5,2,8,-9,3,1];

console.log(sumOfSubArr(a,[[1,3],[2,5]]))