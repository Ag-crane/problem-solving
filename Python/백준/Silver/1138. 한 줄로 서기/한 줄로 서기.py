import sys
input = sys.stdin.readline

n = int(input())
data = list(map(int,input().split()))
line = [0 for _ in range(n)]

# 자기보다 키가 큰 사람 = 앞으로 들어올 사람 빈 자리 = 0
for i in range(n):
    count_zero = 0
    index = 0
    # 자기보다 큰 사람 수 만큼 0 찾기
    for j in range(n):
        if count_zero == data[i]:
            index = j
            break
        if line[j] == 0:
            count_zero += 1

    
    # 마지막 0 다음 빈 자리에 삽입
    for j in range(index,n):
        if line[j] == 0:
            line[j] = i+1
            break

for i in range(n):
    print(line[i],end=' ')