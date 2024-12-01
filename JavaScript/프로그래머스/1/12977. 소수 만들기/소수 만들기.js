function solution(nums) {
    let combinations = []
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                combinations.push([nums[i], nums[j], nums[k]])
            }
        }
    }
    
    let answer = 0
    combinations.forEach(arr => {
        let sum = arr.reduce((a, c) => a + c)
        let isPrimeNum = true
        for (let i=2; i**2<=sum; i++) {
            if (sum%i===0) {
                isPrimeNum = false
                break
            }
        }

        if (isPrimeNum) answer++
    })
    
    return answer
}