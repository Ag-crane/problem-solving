function solution(s){
    var answer = true;
    let count_p = 0;
    let count_y = 0;
    const arr = [...s.toLowerCase()]
    
    arr.forEach(e => {
        if (e=='p') count_p++
        else if (e=='y') count_y++
    })

    return count_p === count_y
}