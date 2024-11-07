import sys
input = sys.stdin.readline

n = int(input())    # 3 ~ 10^4
array = list(map(int,input().split()))  # 1 ~ 10^6
m = int(input())    # n ~ 10^9

# 상한액 x 의 최댓값 구하기

# x의 범위 : 1 ~ max(array)
start = 1
end = max(array)

while start <= end:
    mid = (start + end) // 2
    
    sum = 0
    for i in range(n):
        sum += min(mid, array[i])
    
    if sum <= m:
        result = mid
        start = mid + 1
    else:
        end = mid - 1

print(result)