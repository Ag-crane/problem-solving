n = int(input())
score = [0] * n
for i in range(n):
    score[i] = int(input())

if n == 1:
    print(score[0])
else:
    # 점수를 저장할 배열, d[i]는 i번째 계단까지의 최대 점수를 의미
    d = [0] * n
    d[0] = score[0]
    if n > 1:
        d[1] = score[0] + score[1]

    for i in range(2, n):
        # d[i]를 계산하는 두 가지 경우:
        # 1. i-1 번째 계단을 밟고 i번째 계단을 밟는 경우 (i-2번째 계단은 밟으면 안 됨)
        # 2. i-1 번째 계단을 밟지 않고 i번째 계단을 밟는 경우 (i-2번째 계단을 밟음)
        d[i] = max(d[i-2] + score[i], d[i-3] + score[i-1] + score[i])

    print(d[-1])
