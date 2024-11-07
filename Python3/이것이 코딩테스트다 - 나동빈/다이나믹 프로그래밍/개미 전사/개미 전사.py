n = int(input())
data = list(map(int,input().split()))

'''
d[i] : i번째까지 최댓값
- i번째를 약탈한 경우의 최댓값 : d[i-2] + data[i]
  i-1번째를 약탈할 수 없으므로 i-2번째까지의 최댓값에 i번째 식량을 더함) 
- i번쨰를 약탈하지 않은 경우의 최댓값 : d[i-1]
두 값을 비교하여 더 큰 값을 선택하는 과정을 반복한다
'''
d = [0]*n

d[0] = data[0]
d[1] = max(d[0],data[1])

for i in range(2,n):
    d[i] = max(d[i-1], d[i-2]+data[i])

print(d[n-1])