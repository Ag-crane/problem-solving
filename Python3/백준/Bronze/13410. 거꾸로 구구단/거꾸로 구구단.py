N, K = map(int,input().split())
lst=[]
for i in range(1,K+1):
    lst.append(int(str(N*i)[::-1]))
print(max(lst))