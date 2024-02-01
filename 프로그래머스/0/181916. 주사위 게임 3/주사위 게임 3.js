function count(arr,n) {
    let c=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]===n) c++
    }
    return c
}

function solution(a, b, c, d) {
    var answer = 0;
    let dice = [a,b,c,d]
    let lst=[];
    
    for (let num of dice){
        if (!lst.includes(num)) lst.push(num)
    }
    switch (lst.length){
        case 1:
            answer = 1111*lst[0]
            break;
        case 2:
            if (count(dice,lst[0])===2){
                answer = (lst[0]+lst[1]) * (Math.abs(lst[0]-lst[1]))
            }
            if (count(dice,lst[0])===1) {
                answer = (10*lst[1]+lst[0])**2
            }        
            if (count(dice,lst[0])===3) {
                answer = (10*lst[0]+lst[1])**2
            }
            break;
        case 3:
            answer=1;
            lst.map((num)=>{
                if (count(dice,num)===1) answer*=num
            })
            break;
        case 4:
            answer = Math.min(...lst)
            break;
    }
    
    return answer;
}