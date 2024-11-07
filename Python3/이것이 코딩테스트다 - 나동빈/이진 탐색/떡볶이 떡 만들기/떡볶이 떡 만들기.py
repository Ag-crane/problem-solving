import sys
input = sys.stdin.readline

n,m = map(int,input().split())
heights = list(map(int,input().split()))

start = 0
end = max(heights)

result = 0
while start<=end :
    mid = (start+end)//2
    
    # H==mid 일 때 얻을 수 있는 떡의 길이 x 계산
    x = 0
    for h in heights:
        if h>mid:
            x += h-mid

    if x < m: # 부족하면 H를 낮춰 더 잘라야 한다
        end = mid - 1
    else:     # m이 넘었다면 (조건을 만족했다면) 기록하고, 더 높일 수 있는 지 확인한다 (모든 경우를 확인한 것이 아니기 때문)
        result = mid    # 일단 기록. 반복문을 탈출한다면 이게 정답이 됨
        start = mid + 1 # 더 높여서 이어서 탐색

print(result)

