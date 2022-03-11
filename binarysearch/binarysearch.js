function binarySearch(arr, num){
    let l = 0, h = arr.length-1,ans = -1;
    while(l<=h){
        let m = parseInt((l+h)/2);
        if(arr[m] === num ){
            ans = m;
            return ans;
        }else if(arr[m] > num){
            h = m-1;
        }else{
            l = m+1;
        }
    }
    return ans;
}

console.log(binarySearch([3,6,8,9,23,43], 38));