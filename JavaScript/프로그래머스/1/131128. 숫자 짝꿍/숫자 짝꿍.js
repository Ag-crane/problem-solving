function solution(X, Y) {
    let arr = []
    let obj_X = {}
    let obj_Y = {}
    for (let char of X) {
        obj_X[char] ? obj_X[char]++ : obj_X[char] = 1
    }    
    for (let char of Y) {
        obj_Y[char] ? obj_Y[char]++ : obj_Y[char] = 1
    }
    for (let key of Object.keys(obj_X)) {
        if (obj_Y[key]) {
            let minCount = Math.min(Number(obj_X[key]), Number(obj_Y[key]))
            for (let i = 0; i<minCount; i++) arr.push(key)
        }
    }
    // console.log(arr)
    arr.sort((a, b) => b - a)
    if (arr.length===0) return '-1'
    else if (arr[0]==='0') return '0'
    else return arr.join('')
}

