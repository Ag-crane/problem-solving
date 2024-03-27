import sys
input = sys.stdin.readline

k, n = map(int,input().split())
lines = [int(input()) for _ in range(k)]

'''
만들고자 하는 랜선의 길이 : x
각각 다른 길이의 k개의 랜선으로 n개 이상 만들 수 있는 최대의 x값을 구해라

가능한 x에 대해 모두 계산해보면 해결할 수 있겠다
k개 이하로 만들 수는 없으므로 x의 범위는 0 ~ k의 최댓값 (약 10^9)
완전탐색 -> k최댓값*k번 연산 = (10^4)*(10^9) = 10^13 => 시간초과
=> 이진 탐색 문제구나
'''
result = 0

start = 1
end = max(lines)
while start <= end :
    mid = (start+end)//2
    
    # 만들 수 있는 랜선 개수 계산
    count = 0
    for k in lines:
        count += k // mid
    
    if count < n:      # 개수가 부족하면 더 작은 x 탐색
        end = mid - 1
    else:       # 개수가 충분하면 (n개 이상이면)
        result = mid    # 일단 결과 저장. n개 이상 만들 수 있는 더 큰 x가 없으면 이게 정답
        start = mid + 1     # n개 이상 만들 수 있는 더 큰 x가 있는 지 탐색
    
print(result)