function solution(park, routes) {
    const H = park.length
    const W = park[0].length
    var cur;
    for (let x=0; x<H; x++) {
        for (let y=0; y<W; y++) {
            if (park[x][y]==="S") {
                cur = [x, y]
                break
            }
        }
    }
    
    const direction = {N:[-1,0], S:[1,0], E:[0,1], W:[0,-1]}
    
    for (const route of routes) {
        let isOk = true
        let nx, ny;
        for (let i=1; i<=route[2]; i++) {
            nx = cur[0] + direction[route[0]][0]*i
            ny = cur[1] + direction[route[0]][1]*i
            if (
                nx < 0 || ny < 0 || nx > H-1 || ny > W-1 ||
                park[nx][ny]==="X"
            ) {
                isOk = false
                break
            } else{
            }
        }
        if (isOk) {
            cur[0] += direction[route[0]][0]*route[2]
            cur[1] += direction[route[0]][1]*route[2]
        }
    }
    return cur;
}