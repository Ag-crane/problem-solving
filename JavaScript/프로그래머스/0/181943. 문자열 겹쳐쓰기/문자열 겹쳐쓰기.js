function solution(my_string, overwrite_string, s) {
    let lst = [...my_string]
    lst.splice(s,overwrite_string.length,...overwrite_string)
    return lst.join("")
}