function solution(players, callings) {
    var answer = [];
    let board = {}
    let reverseBoard = {}
    
    players.forEach((name,index)=>{
        board[name] = index+1
        reverseBoard[index+1] = name
    })
    
    callings.forEach((name)=>{
        let rating = board[name]
        let forwardMan = reverseBoard[rating-1]
        
        board[forwardMan]++;
        board[name]--;
        reverseBoard[rating] = forwardMan
        reverseBoard[rating-1] = name
    })
    answer = Object.keys(board)
    answer.sort((a,b)=>board[a] - board[b])
    
    return answer;
    
}