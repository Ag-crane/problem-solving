function solution(numbers) {
    let arr = numbers.map(num => String(num))
    
    arr.sort((a, b) => {
        return a+b > b+a ? -1 : 1  
    })
    
    return arr[0] === '0' ? '0' : arr.join('')
}