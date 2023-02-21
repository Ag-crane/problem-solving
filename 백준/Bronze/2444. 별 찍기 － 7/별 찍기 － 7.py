N = int(input())
n = 2*N-1
for i in range(1,N+1):
  st = ' '*(N-i) + '*'*(2*i-1)
  print(st)
for i in range(N-1,0,-1):
  st = ' '*(N-i) + '*'*(2*i-1)
  print(st)