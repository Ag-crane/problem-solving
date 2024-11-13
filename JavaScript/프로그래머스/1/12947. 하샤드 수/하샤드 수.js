function solution(x) {
    let sum = [...(x + '')].reduce((a,c) => Number(a) + Number(c))
    return x % sum === 0
}