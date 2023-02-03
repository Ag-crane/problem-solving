N = int(input())

n = 1  # 층
d = 1  # 층에 있는 숫자 개수

while True:
  if N <= d:
    break
  N = N-d
  d = 6*n  # 다음 층 숫자 개수
  n+=1

print(n)