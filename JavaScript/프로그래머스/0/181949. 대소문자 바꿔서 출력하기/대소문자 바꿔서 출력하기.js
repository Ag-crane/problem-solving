const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0]
    let answer=''
    for (let c of str){
        if (c.toUpperCase()===c){
            answer+=c.toLowerCase()
        }
        if (c.toLowerCase()===c){
            answer+=c.toUpperCase()
        }
    }   
    console.log(answer)
});