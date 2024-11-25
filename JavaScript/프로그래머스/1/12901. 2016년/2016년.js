function solution(a, b) {
    var answer = '';
    const date1 = new Date(2016, 0, 1);
    const date2 = new Date(2016, a-1, b)
    const diff = (date2 - date1) / (1000 * 60 * 60 * 24)
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
    return days[(5+diff)%7]
}