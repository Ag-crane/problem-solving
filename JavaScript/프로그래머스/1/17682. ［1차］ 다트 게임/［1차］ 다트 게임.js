function solution(dartResult) {
    var answer = 0;
    let arr = []
    let numStr = ''
    
    for (let i=0; i<dartResult.length; i++) {
        let x = dartResult[i]
        
        if (Number.isInteger(Number(x))) {
            numStr += x
        } else {
            if (numStr) {
                arr.push(Number(numStr))
                numStr = ''
            }
        }
        if (x==='D') {
            arr[arr.length-1] = arr[arr.length-1]**2
        } else if (x==='T') {
            arr[arr.length-1] = arr[arr.length-1]**3
        } else if (x==='*') {
            arr[arr.length-1] = arr[arr.length-1]*2
            if (arr.length!==1) {
                arr[arr.length-2] = arr[arr.length-2]*2
            }
        } else if (x==='#') {
            arr[arr.length-1] = arr[arr.length-1]*(-1)
        }
    }
    console.log(arr)
    return arr.reduce((a,c) => a+c)
}