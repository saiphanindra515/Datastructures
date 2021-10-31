// console.log("What is your name?");
// process.stdin.once('data', (chunk) => {
//     let name = chunk.toString();
//     console.log("Hello, " + name + "!");
//     process.exit();
// });

let a =  process.stdin.once('data',(chunk)=>{
    let a = chunk.toString().trim();
    console.log(a[a.length-1], chunk);
    console.log(reverse(a.split(''), 0, a.length-1).join(''));
    process.exit();
})

function reverse(e, start, end){
    console.log(start,end)
    if (start >= end){
        return e;
    }
    const temp = e[start];
    e[start] = e[end];
    e[end] = temp;
    console.log(e);
    return reverse(e, start+1, end-1);
}