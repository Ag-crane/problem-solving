lst = list(input())
t=0
for i in lst:
  if ord(i) < 68:
    t += 3
  elif ord(i) < 71 :
    t += 4
  elif ord(i) < 74 :
    t += 5
  elif ord(i) < 77 :
    t += 6
  elif ord(i) < 80 :
    t += 7
  elif ord(i) < 84 :
    t += 8
  elif ord(i) < 87 :
    t += 9
  else :
    t += 10

print(t)