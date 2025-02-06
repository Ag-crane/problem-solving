function solution(N, stages) {
    const arr1 = Array(N+1).fill(0)
    const arr2 = Array(N+1).fill(0)
    
    for (let stage of stages) {
        if (stage!==N+1) arr1[stage]++
        for (let j=1; j<=stage; j++) {
            if (j!==(N+1)) arr2[j]++
        }
    }
    
    const failure = []
    for (let i=1; i<=N; i++) {
        if (arr2[i]===0) failure.push([0, i])
        else failure.push([arr1[i]/arr2[i], i])
    }
    failure.sort((a, b) => b[0] - a[0])
    return failure.map(e => e[1])

    
    
}