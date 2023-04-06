N, K = map(int,input().split())
A=[]
for i in range(N):
    A.append(int(input()))
A.reverse()  # 내림차순으로

# 큰 원소가 작은 원소들의 배수이므로 그리디 알고리즘으로 해결가능
count=0
for coin in A:
    count += K//coin
    K %= coin

print(count)