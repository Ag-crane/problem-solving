s = input().upper()   #65~90
lst=[]
for i in range(65,91):
  lst.append(s.count(chr(i)))

mx = max(lst)
mx_index = lst.index(mx)
if lst.count(mx)==1:
  print(chr(mx_index+65))
else:
  print('?')