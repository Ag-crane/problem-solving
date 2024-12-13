function solution(id_list, report, k) {
    report = [...new Set(report)] // 중복 제거
    
    let reportCount = {} // 신고 당한 횟수
    let mailCount = {} // 받은 메일 수
    
    // 초기화
    for (const user of id_list) {
        reportCount[user] = 0
        mailCount[user] = 0
    }
    
    for (let i=0; i<report.length; i++) {
        const reported = report[i].split(' ')[1]
        reportCount[reported]++
    }
    
    for (let i=0; i<report.length; i++) {
        const [reporter, reported] = report[i].split(' ')
        if (reportCount[reported] >= k) mailCount[reporter]++
    }
    
    return Object.values(mailCount)
}