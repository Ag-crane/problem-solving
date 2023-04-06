N = int(input())
P = list(map(int,input().split()))
P.sort() # 리스트 내장함수 : 오름차순 정렬
sum=0
for i in range(N):
    for j in range(i+1):
      sum += P[j]
print(sum)