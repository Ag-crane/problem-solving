N = input()
if len(N)==1:
  N = '0'+ N
ans = N
cycle = 0

while True: 
  cycle+=1
  M = str( int(N[0])+int(N[1]) )
  if len(M)==1:
    M = '0' + M
  N = N[1]+M[1]
  if N == ans:
    break

print(cycle)