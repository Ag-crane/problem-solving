i=1
while True:
  L,P,V = map( int, input().split() )
  if L==0:
    break
  
  answer = V//P*L + min(V%P,L) 
  print(f'Case {i}: {answer}')
  i+=1