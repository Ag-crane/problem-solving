function solution(n, arr1, arr2) {
    let answer = Array.from(Array(n), () => Array(n).fill('#'));
    
    for (let r=0; r<n; r++){
        let row1 = arr1[r].toString(2).padStart(n, '0').split('')
        let row2 = arr2[r].toString(2).padStart(n, '0').split('')
        for (let c=0; c<n; c++){
            if (row1[c] === '0' && row2[c] === '0') answer[r][c] = ' '
        }
    }
    
    return answer.map(row => row.join(''));
}