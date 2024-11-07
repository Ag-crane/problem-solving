function solution(arr, delete_list) {

    delete_list.forEach(e => {
        if (arr.includes(e)) {
            arr.splice(arr.indexOf(e),1)
        }
    })
    
    return arr;
}