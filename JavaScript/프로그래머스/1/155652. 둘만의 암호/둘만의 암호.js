function solution(s, skip, index) {
    var result = '';
    let skipCodes = skip.split("").map(c => c.charCodeAt())
    for (let char of s) {
        let charCode = char.charCodeAt()
        for (let i=0; i<index; i++) {
            charCode++
            if (charCode===123) charCode = 97
            if (skipCodes.includes(charCode)) {
                i--
            }
        }
        result += String.fromCharCode(charCode)
    }
    return result;
}