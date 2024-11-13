function solution(n) {
    return Number([...(n+"")].sort((a, b) => Number(b) - Number(a)).join(''))
}