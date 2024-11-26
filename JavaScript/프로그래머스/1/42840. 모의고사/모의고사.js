function solution(answers) {
    var answer = [];
    const student1 = [1, 2, 3, 4, 5]
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let countArr = [0, 0, 0]
    answers.forEach((ans, i) => {
        if (student1[i % 5] === ans) countArr[0]++
        if (student2[i % 8] === ans) countArr[1]++
        if (student3[i % 10] === ans) countArr[2]++
    })
    const max = Math.max(...countArr)
    countArr.forEach((e, i) =>{
        if (e===max) answer.push(i+1)
    })
    return answer.sort((a, b) => a - b);
}