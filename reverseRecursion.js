// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function getInput(){
   return new Promise(resolve => {
       rl.question(e => {
           console.log(e);
           resolve(e)
       })
   })
}

async function initialFunction(){
    let str = await getInput();
    return reverse(str, 0, str.length-1);
}

function reverse(e, start, end){
    if (start >= end){
        return e;
    }
    const temp = e[start];
    e[start] = e[end];
    e[end] = temp;
    return reverse(e, ++start, --end);
}


return initialFunction().catch(err => console.log(err));