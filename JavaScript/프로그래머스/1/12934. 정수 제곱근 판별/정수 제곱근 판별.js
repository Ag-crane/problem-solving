function solution(n) {
    let rootN = n**(1/2)
    if (Math.floor(rootN) === rootN) return (rootN+1)**2
    else return -1
}