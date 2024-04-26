n = int(input())

d = [0] * (n+1)
if n==1:
    print(0)
elif n==2:
    print(1)
else:
    d[1] = 0
    d[2] = 1
    d[3] = 1

    for i in range(4,n+1):
        lst = [d[i-1]]
        if i%3 == 0: lst.append(d[i//3])
        if i%2 == 0: lst.append(d[i//2])
        d[i] = min(lst) + 1

    print(d[n])
