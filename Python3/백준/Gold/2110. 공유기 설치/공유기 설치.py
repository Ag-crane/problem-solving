import sys
input = sys.stdin.readline

# 두 공유기 사이의 거리의 최솟값이 d일 때, 설치 가능한 공유기 수를 리턴하는 함수
def check(d):
    # 첫 번째 집에 공유기 설치
    last_install = array[0]     # 마지막으로 설치한 공유기 위치
    count = 1   # 공유기 개수
    for i in range(1,n):
        if array[i] - last_install >= d:
            last_install = array[i]
            count += 1

    return count

n, c = map(int,input().split())
array = [int(input()) for _ in range(n)]
array.sort()

result = 0

# 두 공유기 사이의 거리의 최솟값을 d라고 할 때
# d의 가능한 범위는 1 ~ 10^9 이므로, 이분탐색으로 찾는다.
# 설치되는 공유기의 갯수가 c인 d를 찾고, 그 중에서 최댓값을 찾는다. 

start = 1
end = array[-1] - array[0]

while start<=end :
    
    mid = (start + end) // 2
    if check(mid) < c:  # 공유기 수가 부족하면 거리를 더 좁혀야 함
        end = mid - 1   # 왼쪽에서 찾기
    else :      # 공유기 수가 충분하면
        result = mid    # 현재 거리 저장
        start = mid + 1     # 더 큰 d가 있을 수 있으므로 오른쪽 탐색

print(result)