function solution(arr) {
    var answer = [[]];
    let row = arr.length
    let col = arr[0].length
    while (row!==col){
        if ( row > col ) {
            for (let i=0;i<row;i++){
            arr[i].push(0)
            }
        col++;
        }
        if (row < col ) {
            arr.push(new Array(col).fill(0))
            row++;
        }
    }
        
    return arr;
}