Money = int(input())
wallet = [500,100,50,10,5,1]
change = 1000 - Money

count = 0
for m in wallet :
    count += change//m
    change = change%m

print(count)