function solution(numbers, hand) {
    let result = ""
    const keyPad = new Map([
        [1, [0,0]],
        [2, [0,1]],
        [3, [0,2]],
        [4, [1,0]],
        [5, [1,1]],
        [6, [1,2]],
        [7, [2,0]],
        [8, [2,1]],
        [9, [2,2]],
        [0, [3,1]]
    ])
    let leftThumb = [3, 0], rightThumb = [3, 2]
    
    for (let n of numbers) {
        let loc = keyPad.get(n)
        if (loc[1] === 0) {
            result += "L"
            leftThumb = loc
        } else if (loc[1] === 2) {
            result += "R"
            rightThumb = loc
        } else {
            let leftD = Math.abs(leftThumb[0] - loc[0]) + Math.abs(leftThumb[1] - loc[1])
            let rightD = Math.abs(rightThumb[0] - loc[0]) + Math.abs(rightThumb[1] - loc[1])
            if (leftD < rightD) {
                result += "L"
                leftThumb = loc
            } else if (leftD > rightD) {
                result += "R"
                rightThumb = loc                
            } else {
                // 거리가 같을 경우
                if (hand==="left") {
                    result += "L"
                    leftThumb = loc
                } else {
                    result += "R"
                    rightThumb = loc
                }
            }
        }
    }
    
    return result
}