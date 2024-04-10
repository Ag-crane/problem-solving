import sys
input = sys.stdin.readline

'''
질투심 x : 가장 많은 보석을 가져간 학생이 가지고 있는 보석의 개수
          = 한 학생이 가질 수 있는 보석의 최댓값
'''

# x가 주어질 때 보석을 모두 나누어줄 수 있는 지 여부 확인
def check(x):
    count = 0   # 보석을 받은 학생 수
    for jewel in array:
        count += jewel // x
        if jewel % x != 0:
            count += 1
        if count > n:   # 학생 수가 n명을 초과하면, 실패
            return False
    
    return True

n, m = map(int,input().split())
array = [int(input()) for _ in range(m)]

start = 1
end = max(array)

while start<=end :
    
    mid = (start + end) // 2
    
    if check(mid):
        result = mid
        end = mid -1
    else:
        start = mid + 1

print(result)