N = int(input())
count=0
num=666
while True:
    if str(num).find('666') != -1:
        count += 1
    if count == N:
        break
    num+=1
print(num)