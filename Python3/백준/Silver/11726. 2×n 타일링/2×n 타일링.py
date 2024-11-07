n = int(input())

d = [0] * (n+1)

if n==1:
    print(1)
else:
    d[1] = 1
    d[2] = 2

    for i in range(3,n+1):
        d[i] = (d[i-2] + d[i-1]) % 10007

    print(d[n])