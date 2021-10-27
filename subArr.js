function subarr (A){
    let ps = [...A];
    let n = A.length;
    for(let j=1; j<n; j++){
        ps[j] = ps[j]+ps[j-1];
    }
    console.log(ps);
    let map = new Map();
    let max = 0;
    let len;
    let index;
    let ele;
    map.set(0,-1);
    for(let i=0; i<n; i++){
      if(map.has(ps[i])){
         len = i - map.get(ps[i]);
         if(max < len){
             max = len;
             ele = ps[i];
             index = i;
         }
      }else{
          map.set(ps[i],i);
      }  
    }
    console.log(map);
    console.log(index, ele, max);
    let result = new Array(max).fill(0);
    let k = map.get(ele)+1;
    let i = 0;
    for(k; k<=index; k++){
        result[i] = A[k];
        i++;
    }
    return result;
 }

 console.log(subarr([1,2,-2,4,-4]));

