function solution(arr, n) {
    const l = arr.length
    for (let i=0; i<l; i++){
        if ( (l%2 === 1) & (i%2 === 0) ){
            arr[i]+=n
        }else if ( (l%2 === 0) & (i%2 === 1) ){
            arr[i]+=n
        }
    }

    return arr;
}