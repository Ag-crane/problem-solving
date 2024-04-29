n = int(input())
data = list(map(int,input().split()))

d = [0] * (n)
d[0] = data[0]
successive_sum = max(data[0], 0)
for i in range(1,n):
    d[i] = max(d[i-1], successive_sum + data[i])
    successive_sum += data[i]
    if successive_sum <= 0:
        successive_sum = 0

print(d[n-1])