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

    if x == m:  ### 오답 : 정확히 m을 요구하는 것이 아니다. m 이상이 나오는 최대의 H을 구하는 것
        result = mid
        break
    elif x < m: ### 부족하면 당연히 H를 낮춰 더 잘라야 하지만
        end = mid - 1
    else:       ### m이 넘었다면 일단 기록하고, H를 더 높일 수 있는 지 더 확인해봐야 한다
        start = mid + 1

print(result)

