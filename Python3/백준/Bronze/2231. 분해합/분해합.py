
N = int(input())
m = 1       # 자연수 1부터 전체탐색
while (m<N):         # 생성자가 없는 경우 무한루프 방지
    sum = 0          # 각 자리 수 합
    for i in range( len(str(m)) ):
        sum += int( str(m)[i] )
    
    if (sum + m) == N:      # m의 분해합이 N인 경우
        break
    m += 1

if m==N:
    print(0)
elif m<N:
    print(m)