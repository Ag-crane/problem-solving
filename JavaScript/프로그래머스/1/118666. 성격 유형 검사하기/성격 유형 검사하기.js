function solution(survey, choices) {
    var answer = '';
    let cases = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    }
    for (let i=0; i<survey.length; i++){
        
        let char1 = survey[i][0]
        let char2 = survey[i][1]
        let point = choices[i]-4
        if (point<0) {
            cases[char1] -= point
        }
        if (point>0) {
            cases[char2] += point
        }
    }
    console.log(cases)
    
    answer += cases['R'] >= cases['T'] ? 'R' : 'T'
    answer += cases['C'] >= cases['F'] ? 'C' : 'F'
    answer += cases['J'] >= cases['M'] ? 'J' : 'M'
    answer += cases['A'] >= cases['N'] ? 'A' : 'N'
    
    
        
    
    return answer;
}