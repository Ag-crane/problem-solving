function solution(n, words) {
    const set = new Set([words[0]])
    console.log(set)
    for (let i=1; i<words.length; i++) {
        if (words[i][0] !== words[i-1].at(-1) || set.has(words[i])) {
            return [i%n + 1, Math.floor(i/n)+1]
        } else {
            set.add(words[i])
        }
    }
    return [0, 0]
}