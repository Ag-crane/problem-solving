function solution(myString, pat) {
    let arr = [...myString]
    arr.forEach((e, i) => {
        if (e === 'A'){
            arr[i] = 'B'
        } else{
            arr[i] = 'A'
        }
    })

    return arr.join('').includes(pat) ? 1 : 0
}