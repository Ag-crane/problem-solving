'''
다익스트라 알고리즘 : 한 지점 -> 다른 모든 지점까지의 최단경로
플로이드 워셜 알고리즘 : 모든 지점 -> 모든 지점까지의 최단경로

다이나믹 프로그래밍을 이용해 모든 경우의 수(노드 -> 노드 N^2가지)
k번 노드를 거쳐 가는 경우와 비교하여 더 짧은 거리를 저장한다.
점화식 : D(ab) = min( D(ab), D(ak) + D(kb) )

총 시간복잡도 : O(N^3)
'''
INF = int(1e9)

# 노드 개수, 간선 개수
n, m = map(int, input().split())

# 노드 -> 노드 최단거리 기록할 2차원 리스트 초기화
graph = [[INF for _ in range(n+1)] for _ in range(n+1)]
for i in range(n+1): 
    graph[i][i] = 0

# 간선 정보 입력받기
for _ in range(m):
    # a에서 b로 가는 비용이 c
    a, b, c = map(int, input().split())
    graph[a][b] = c

# 플로이드 워셜 알고리즘
for k in range(n+1):
    for i in range(n+1):
        for j in range(n+1):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

# 출력
for i in range(1,n+1):
    for j in range(1,n+1):
        if graph[i][j] == INF:
            print('INF', end=' ')
        else:
            print(graph[i][j], end=' ')
    print('')

'''
입력 예시
4 7
1 2 4
1 4 6
2 1 3
2 3 7
3 1 5
3 4 4
4 3 2
'''
