function solution(n,a,b)
{
    function getNextNum(num) {
        if (num%2===0) return num/2
        else return (num + 1)/2
    }
    
    let answer  = 0;
    
    while (a !== b) {
        a = getNextNum(a)
        b = getNextNum(b)
        answer++
    }
    
    return answer
}