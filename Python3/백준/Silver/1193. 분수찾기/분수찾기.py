# 분자 A : 1 1 2 3 2 1 1 2 3 4 5 4 3 2 1
# 1 5 9 13 ... 

X = int(input())
x = X
i=1
while True:
  if x<=i:
    break
  x -= i
  i += 4

if x<=i//2:
  A = x
else:
  A = i-x+1

# 분모 B : 1 2 1 1 2 3 4 3 2 1 1 2 3 4 5 6 5 4 3 2 1
# 3 7 11 ... 

x = X
i=3
while True:
  if x<=i:
    break
  x -= i
  i += 4

if x<=i//2:
  B = x
else:
  B = i-x+1

print(f'{A}/{B}')