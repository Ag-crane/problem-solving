case = int(input())
for i in range(case):
  N, *scores = list(map(int, input().split()))
  avg = sum(scores) / N
  print( f'{len(list(filter(lambda x:x>avg, scores))) / N * 100:.3f}%' )
