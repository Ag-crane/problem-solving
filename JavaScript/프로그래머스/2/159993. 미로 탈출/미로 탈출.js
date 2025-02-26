function solution(maps) {
    maps = maps.map(str => str.split(''));

    let start, lever, end
    for (let i=0; i<maps.length; i++) {
        for (let j=0; j<maps[0].length; j++) {
            if (maps[i][j] === 'S') start = [i, j]
            else if (maps[i][j] === 'L') lever = [i, j]
            else if (maps[i][j] === 'E') end = [i, j]
        }
    }

    function bfs(start, end) {
        let q = []
        q.push([start, 0])

        const dx = [1, -1, 0, 0]
        const dy = [0, 0, 1, -1]

        let visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false))

        visited[start[0]][start[1]] = true

        while (q.length > 0) {
            const [[cx, cy], d] = q.shift()

            if (cx === end[0] && cy === end[1]) return d

            for (let i = 0; i < 4; i++) {
                const nx = cx + dx[i]
                const ny = cy + dy[i]

                if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) continue 

                if (maps[nx][ny] !== 'X' && !visited[nx][ny]) {
                    visited[nx][ny] = true
                    q.push([[nx, ny], d + 1])
                }
            }
        }
        return -1
    }

    
    // S -> L 최단거리
    let toLever = bfs(start, lever);
    if (toLever === -1) return -1;

    // L -> E 최단거리
    let toExit = bfs(lever, end);
    if (toExit === -1) return -1;

    return toLever + toExit;
}