function solution(n) {
    var answer = new Array(n)
    for (let i=0; i<n; i++ ){
        answer[i] = new Array(n).fill(0)
    }
    
    let count = 0;
    let start = 0;
    let end = n-1;
    // 한 변의 길이는 n으로 시작해서 2씩 줄어든다.
    // 0이 되면 끝, 1이 되면 가운데에 n제곱 넣기
    for (let len=n; len>=1; len-=2){
        for (let i=start; i<end; i++){
            count++
            answer[start][i]=count
        }
        for (let i=start;i<end;i++){
            count++
            answer[i][end]=count
        }
        for (let i=end;i>start;i--){
            count++
            answer[end][i]=count
        }
        for (let i=end;i>start;i--){
            count++
            answer[i][start]=count
        }
        
        if (len === 1){
            const center = (n-1)/2
            answer[center][center] = n**2
        }
        
        start++;
        end--;
        
    }
    
    
    
    return answer;
}