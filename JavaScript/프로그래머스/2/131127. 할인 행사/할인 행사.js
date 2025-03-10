function solution(want, number, discount) {
    let result = 0;
    
    let needed = {}
    for (let i=0; i<want.length; i++) {
        needed[want[i]] = number[i]
    }
    
    let currentCount = {} // i: 0~9
    for (let i=0; i<10; i++) {
        currentCount[discount[i]] = (currentCount[discount[i]] || 0) + 1
    }

    function check() {
        for (const key of Object.keys(needed)) {
            if (needed[key]!==currentCount[key]) {
                return false
            }
        }
        return true
    }
    
    if (check()) result++
    
    // 슬라이딩 윈도우 적용
    for (let i=0; i<discount.length - 10; i++) {
        currentCount[discount[i]]-- // 맨 앞 제거
        currentCount[discount[i+10]] = (currentCount[discount[i+10]] || 0) + 1 // 맨 뒤 추가
        
        if (check()) result++
    }
    
    return result;
}