def d(n):
  lst = list(str(n))
  sum=0
  for s in lst:
    sum += int(s)
  return n+sum

dn_lst = []
n=1
while n<=10000:
  dn_lst.append(d(n))
  n += 1

selfNum=1
while selfNum<=10000:
  if selfNum not in dn_lst:
    print(selfNum)
  selfNum+=1
