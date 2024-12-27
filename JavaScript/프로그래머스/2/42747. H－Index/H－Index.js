function solution(citations) {
    let arr = Array(citations.length).fill(0)
    
    for (let i=0; i<citations.length; i++) {
        for (let j=0; j<citations.length; j++) {
            if (citations[i] <= citations[j]) arr[i]++
        }
    }
    
    let arr2 = []
    for (let i=0; i<citations.length; i++) {
        arr2.push(Math.min(arr[i], citations[i]))
    }
    
    return Math.max(...arr2)
}