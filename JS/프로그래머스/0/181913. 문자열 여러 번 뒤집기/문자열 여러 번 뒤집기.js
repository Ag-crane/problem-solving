function solution(my_string, queries) {
    var answer = '';

    // answer = queries.reduce((word,curr)=> {
    //             let lst = [...word];
    //             let newLst = lst.slice(curr[0],curr[1]+1).reverse()
    //             lst.splice(curr[0],curr[1]-curr[0]+1, ...newLst)
    //             return lst.join("")
    //         }, my_string)
    
    array = [...my_string]
    queries.forEach(([s,e])=>{
        slice = array.slice(s,e+1).reverse()
        array.splice(s,e-s+1,...slice)
    })
    answer = array.join('')
    
    return answer;
}