function solution(n) {
    var answer = 0;

    if ( n%2 == 1 ) {
        for ( let i=0; 2*i+1<=n; i++){
            answer += 2*i+1
        }
    }else {
        for ( let i=0; 2*i <= n; i++){
            answer += (2*i)**2
        }
    }
    return answer;
}