function solution(my_string, m, c) {
    return [...my_string].filter((e,i)=>(i-c+1)%m===0).join("")
}