import sys
input = sys.stdin.readline

n, m = map(int,input().split())
trees = list(map(int,input().split()))

result = 0

# 절단기의 높이 H의 범위를 이분 탐색
start = 0
end = max(trees)

while start <= end :
    
    mid = (start + end) // 2

    # 가져갈 수 있는 나무의 길이(x) 계산
    x = 0
    for tree in trees:
        if tree > mid :
            x += tree - mid
    
    if x < m :      # 목표치인 m보다 모자라면
        end = mid - 1       # 더 낮은 H 탐색
    else : # 충분하면
        result = mid        # 결과 저장 후
        start = mid + 1     # 더 큰 H 탐색, 없으면 반복문 탈출

print(result)