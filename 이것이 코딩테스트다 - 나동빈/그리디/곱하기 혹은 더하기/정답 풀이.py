data = list(map(int,input()))

result = data[0]
for i in range(1,len(data)):
    if result <= 1 or data[i] <= 1: # '둘 중에 하나라도 0이나 1이면' 
        result += data[i] 
    else:
        result *= data[i]

print(result)