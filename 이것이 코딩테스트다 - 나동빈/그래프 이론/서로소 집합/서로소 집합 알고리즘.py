
# 특정 원소가 속한 집합 찾기
def find_root(parent, x):
    # 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    # 경로 압축 기법 사용
    if parent[x] != x:
        parent[x] = find_root(parent, parent[x])
    return parent[x]

# 두 원소가 속한 집합 합치기
def union_parent(parent, a, b):
    a = find_root(parent, a)
    b = find_root(parent, b)
    # 번호가 더 큰 노드가 더 작은 노드를 가리키도록 (작은 노드가 부모, 큰 노드가 자식)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


# 노드 개수와 간선(union 연산)의 개수 입력
v, e = map(int, input().split())

# 부모 테이블 초기화 : 모든 원소가 자기 자신을 가지도록
parent = [i for i in range(v+1)]

# 간선(union 연산) 수행
for _ in range(e):
    a, b = map(int, input().split())
    union_parent(parent, a, b)

# 각 원소가 속한 집합 출력
print('각 원소가 속한 집합: ', end='')
for i in range(1, v+1):
    print(find_root(parent, i), end=' ')

print()

# 부모 테이블 출력
print('부모 테이블: ', end='')
for i in range(1, v+1):
    print(parent[i], end=' ')


'''
입력 예시
6 4
1 4
2 3
2 4
5 6

출력 예시
1 1 1 1 5 5
1 1 2 1 5 5
'''
