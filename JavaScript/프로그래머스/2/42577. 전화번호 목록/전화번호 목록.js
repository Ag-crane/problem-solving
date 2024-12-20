function solution(phone_book) {
    let dict = {}
    phone_book.forEach(e => {
        dict[e] = true
    })
    
    for (const phone of phone_book) {
        for (let i=0; i<phone.length; i++) {
            let slice = phone.slice(0,i)
            if (dict[slice]===true) return false
        }
    }
    return true
}