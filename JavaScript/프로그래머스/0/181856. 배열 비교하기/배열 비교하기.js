function solution(arr1, arr2) {
    var answer = 0;
    const l1 = arr1.length
    const l2 = arr2.length
    if (l1 > l2){
        return 1
    } else if (l1 < l2){
        return -1
    } else {
        const sum1 = arr1.reduce((acc, cur) => acc + cur, 0)
        const sum2 = arr2.reduce((acc, cur) => acc + cur, 0)

        if (sum1 === sum2) {
            return 0
        } else{
            return sum1 > sum2 ? 1 : -1
        }
    }
    return answer;
}