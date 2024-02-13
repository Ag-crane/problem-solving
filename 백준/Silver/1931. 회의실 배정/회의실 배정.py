n = int(input())
lst = [ list(map(int,input().split(" "))) for _ in range(n) ]
selectedLst = []
# 제일 빨리 끝나는 회의 고르기
sortedLst = sorted(lst,key=lambda x:(x[1],x[0]))
selectedLst.append(sortedLst[0])

# 그 다음 회의 :
for i in range(1,len(sortedLst)):
    if selectedLst[-1][1] <= sortedLst[i][0]:
        selectedLst.append(sortedLst[i])

print(len(selectedLst))
