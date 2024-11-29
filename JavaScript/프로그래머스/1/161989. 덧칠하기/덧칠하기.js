function solution(n, m, section) {
    let count = 0
    let end = 0
    section.forEach(num => {
        if (num > end) {
            count++
            end = num + m - 1
        }
    })

    return count
}