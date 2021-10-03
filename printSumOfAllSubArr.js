// print sum of all sub arrays.

function printSubArrSum(Arr){
    for(i=0;i<Arr.length;i++){
        sum = 0;
        for(j=i;j<Arr.length; j++){
            sum += Arr[j];
            console.log(" "+sum);
        }
    }
}

printSubArrSum([1,2,3]);