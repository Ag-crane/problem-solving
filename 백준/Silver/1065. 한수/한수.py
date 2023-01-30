def is_arithmetic(n):
  lst = list(map(int , str(n)))
  for i in range(len(lst)-2):        
    if not lst[i+1]-lst[i]==lst[i+2]-lst[i+1]:  
      return False
  return True    

N = int(input())                 
count=0
for n in range(1,N+1):
  if is_arithmetic(n):
    count+=1

print(count)