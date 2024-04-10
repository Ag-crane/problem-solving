import sys
input = sys.stdin.readline

def check(x):
    sum = 0     # 현재 블루레이에 담긴 강의의 총 길이
    count = 1   # 블루레이 개수
    for i in range(n):
        if sum + array[i] <= x:
            sum += array[i]
        elif count < m:
            count += 1
            sum = array[i]
        else :
            return False    # count가 m 초과일 경우
    return True     # count가 m 이하일 경우

n, m = map(int,input().split())
array = list(map(int,input().split()))

# 가능한 블루레이의 크기 x의 최소값 구하기

# x의 범위 : 가장 긴 강의의 길이 ~ 모든 강의의 길이의 합

start = max(array)
end = sum(array)

while start <= end:
    mid = (start + end) // 2
            
    if check(mid):
        result = mid
        end = mid - 1
    else:
        start = mid + 1
        
print(result)