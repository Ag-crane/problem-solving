n = int(input())
lst = [list(map(int,input().split())) for _ in range(n)]

lst.sort(key=lambda x:(x[1],x[0]))

for i in range(n):
    print(lst[i][0],lst[i][1])