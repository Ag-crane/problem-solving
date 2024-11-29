function solution(n) {
    if (n < 2) return 0; // 2보다 작은 경우 소수 없음
    const isPrime = Array(n + 1).fill(true); // 0부터 n까지 소수 여부 저장
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    for (let i = 2; i * i <= n; i++) { // 제곱근까지만 검사
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) { // i의 배수를 모두 소수가 아니라고 표시
                isPrime[j] = false;
            }
        }
    }
    
    // 소수 개수 세기
    return isPrime.filter(Boolean).length;
}
