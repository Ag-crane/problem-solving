function solution(name, yearning, photo) {
    var answer = [];
    
    let dict = name.reduce((a, v, i) => {
        a[v] = yearning[i]
        return a
    }, {})
    answer = photo.map(lst => {
        return lst.reduce((acc, name) => {
            return dict[name] ? acc + dict[name] : acc
        }, 0)
    })
    return answer;
}