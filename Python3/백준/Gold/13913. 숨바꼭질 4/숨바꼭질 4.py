from collections import deque

n, k = map(int,input().split())

def bfs(x):
    prev_pos = [None]*100001
    q = deque([x])
    prev_pos[x] = -1
    
    while q:
        # print(q)
        x = q.popleft()
        
        if x==k:
            trail = [x]
            prev = prev_pos[x]
            while prev != -1:
                trail.append(prev)
                prev = prev_pos[prev]
            
            return trail

        for nx in [x-1,x+1,2*x]:
            if nx<0 or nx>100000:
                continue
            if prev_pos[nx]==None :
               q.append(nx)
               prev_pos[nx] = x

    return trail

result = bfs(n)
print(len(result)-1)
for i in reversed(result):
    print(i,end=' ')