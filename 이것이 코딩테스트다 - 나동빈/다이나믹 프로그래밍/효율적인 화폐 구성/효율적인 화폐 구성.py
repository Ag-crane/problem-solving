n, m = map(int,input().split())
array = [int(input()) for _ in range(n)]

# d[i] : i원을 만드는데 필요한 화폐 개수
d = [10001]*(m+1)   # 만들 수 없는 금액으로 초기화
d[0] = 0  # 0원을 만드는 데에는 화폐가 필요 없으므로 0으로 설정

for i in range(n):  # 각 화폐에 대하여
    for j in range(array[i], m + 1):  # 해당 화폐로 만들 수 있는 금액들에 대해
        if d[j - array[i]] != 10001:  # (i-k)원을 만드는 방법이 존재하는 경우
            d[j] = min(d[j], d[j - array[i]] + 1)  # 최소 화폐 개수 갱신

# 최종적으로 M원을 만드는 방법이 없는 경우
if d[m] == 10001:
    print(-1)
else:
    print(d[m])  # M원을 만들기 위한 최소 화폐 개수 출력