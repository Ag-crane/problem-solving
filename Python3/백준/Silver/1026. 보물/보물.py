N = int(input())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

S = 0
for i in range(N):
    S += sorted(A)[i] * sorted(B, reverse=True)[i]
print(S)