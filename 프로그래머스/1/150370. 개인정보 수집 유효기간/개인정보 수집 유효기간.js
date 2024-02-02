function isValid(today, date, period){
    let todayLst = today.split(".").map((e)=>Number(e))
    let dateLst = date.split(".").map((e)=>Number(e))
    return todayLst[0]*12*28 + todayLst[1]*28 + todayLst[2] < dateLst[0]*12*28 + (dateLst[1]+period)*28 + dateLst[2] ? true : false
}

function solution(today, terms, privacies) {
    var answer = [];
    let termsObj = {}
    
    terms.forEach((term)=>{
        let [type, period] = term.split(" ")
        termsObj[type] = parseInt(period)
     }) //	{ A: 6, B: 12, C: 3 }
    
    privacies.forEach((privacy, index)=>{
        let [date, type] = privacy.split(" ")
        
        if (!isValid(today, date, termsObj[type])) answer.push(index+1)
        
    })
    
    return answer;
}