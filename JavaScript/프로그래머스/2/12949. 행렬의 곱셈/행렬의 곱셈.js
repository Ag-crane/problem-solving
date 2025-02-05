function solution(arr1, arr2) {
    const N = arr1.length
    const M = arr2[0].length
    const answer = Array.from({length:N}, _ => Array(M).fill(0));
    
    for (let i=0; i<N; i++) {
        for (let j=0; j<M; j++) {
            answer[i][j] = arr1[i].reduce((a, c, index) => a + c * arr2[index][j], 0)
        }
    }
    return answer;
}