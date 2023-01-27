N = int(input())
for i in range(N):

  lst = list(input())

  score = 0
  count = 0
  for c in lst:
    if c == 'O' :
      count += 1
    if c == 'X' :
      count = 0
    score += count

  print(score)