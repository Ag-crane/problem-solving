lst = input().split('-')
sumLst = []

for sik in lst:
    sumLst.append(sum(map(int,sik.split('+'))))

result = sumLst[0]
for i in range(1,len(sumLst)):
    result -= sumLst[i]
    
print(result)