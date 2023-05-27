def people(k,n):
    floor=[]
    floor.append([i for i in range(1,n+1)])
    for i in range(1,k+1):
        floor.append([sum(floor[i-1][:j+1]) for j in range(n)])

    return floor[k][n-1]
    
T = int(input())
for i in range(T):
    k = int(input())
    n = int(input())
    print(people(k,n))