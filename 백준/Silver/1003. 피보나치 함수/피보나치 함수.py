T = int(input())

for _ in range(T):
    n = int(input())
    
    d = [[0,0] for _ in range(n+4)]     # n이 3 이하여도 index 오류 없게 n+4칸 마련
    d[0] = [1,0]
    d[1] = [0,1]
    d[2] = [1,1]
    d[3] = [1,2]   
    
    for i in range(4,n+1):
        d[i][0] = d[i-1][0] + d[i-2][0]
        d[i][1] = d[i-1][1] + d[i-2][1]
    print(d[n][0],d[n][1])