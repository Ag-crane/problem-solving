function solution(arr1, arr2) {
    let [row, col] = [arr1.length, arr1[0].length]
    let answer = Array.from({length: row}, () => Array(col).fill(0))
    
    for (let i=0; i<row; i++){
        for (let j=0; j<col; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}