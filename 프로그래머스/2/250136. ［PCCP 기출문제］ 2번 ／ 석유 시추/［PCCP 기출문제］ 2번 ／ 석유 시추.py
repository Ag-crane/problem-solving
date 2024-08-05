from collections import deque, defaultdict

def solution(land):
    n, m = len(land), len(land[0])
    
    def bfs(x, y, cluster_id):
        queue = deque([(x, y)])
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        cluster_size = 0
        while queue:
            cx, cy = queue.popleft()
            if 0 <= cx < n and 0 <= cy < m and land[cx][cy] == 1:
                land[cx][cy] = cluster_id
                cluster_size += 1
                for dx, dy in directions:
                    nx, ny = cx + dx, cy + dy
                    queue.append((nx, ny))
        return cluster_size

    cluster_id = 2  # Starting cluster_id from 2 since 0 and 1 are already used
    cluster_sizes = {}

    for i in range(n):
        for j in range(m):
            if land[i][j] == 1:
                cluster_sizes[cluster_id] = bfs(i, j, cluster_id)
                cluster_id += 1
    
    max_oil = 0

    for col in range(m):
        seen_clusters = set()
        total_oil = 0
        for row in range(n):
            cell = land[row][col]
            if cell > 1 and cell not in seen_clusters:
                seen_clusters.add(cell)
                total_oil += cluster_sizes[cell]
        max_oil = max(max_oil, total_oil)

    return max_oil