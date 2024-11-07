T = int(input())
for t in range(T):
  R, S = input().split()
  R = int(R)
  P =''
  for c in S:
    for i in range(R):
      P += c
  print(P)