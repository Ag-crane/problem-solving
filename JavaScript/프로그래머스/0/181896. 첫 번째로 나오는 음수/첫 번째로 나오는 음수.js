function solution(num_list) {
    
    for (let i=0;i<num_list.length;i++){
        if ( num_list[i]<0 ) {
            answer = i
            return i
        }
    }
    
    return -1;
}