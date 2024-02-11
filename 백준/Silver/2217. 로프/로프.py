n = int(input())
inputLst = [int(input()) for _ in range(n)]

inputLst.sort()
l = len(inputLst)
weightLst = []

for i in range(l):
    weightLst.append(inputLst[i]*(l-i))
    
print(max(weightLst))
