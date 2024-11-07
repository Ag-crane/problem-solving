lst = ['c=','c-','dz=','d-','lj','nj','s=','z=']
word = input()
count=0
for i in lst:
  count += word.count(i)

print( len(word)-count )