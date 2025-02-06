function solution(dirs) {
    const dirDict = {"U": [1,0], "D": [-1, 0], "R":[0,1], "L":[0,-1]}
    const visited = new Set()
    let count = 0
    let [x, y] = [0, 0]
    
    for (const dir of dirs) {
        const [dx, dy] = dirDict[dir];
        const [nx, ny] = [x + dx, y + dy];
        
        if (nx<-5 || nx>5 || ny<-5 || ny>5) continue;
        if (!visited.has(JSON.stringify([x, y, nx, ny]))) count++;
        
        visited.add(JSON.stringify([x, y, nx, ny]));
        visited.add(JSON.stringify([nx, ny, x, y]));
        [x, y] = [nx, ny];
    }
        
    return count
}