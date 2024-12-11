function solution(wallpaper) {
    let xArr = [];
    let yArr = [];
    
    for (let row=0; row<wallpaper.length; row++) {
        for (let col=0; col<wallpaper[0].length; col++) {
            if (wallpaper[row][col]==='#') {
                xArr.push(row)
                yArr.push(col)
            }
        }
    }
    
    return [Math.min(...xArr), Math.min(...yArr), Math.max(...xArr)+1, Math.max(...yArr)+1];
}