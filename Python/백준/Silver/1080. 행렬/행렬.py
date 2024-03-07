def printArray(arr): # 디버깅용
    for row in arr:
        for n in row:
            print(n,end=' ')
        print()

def transArray(arr,row,col):
    for r in range(row,row+3):
        for c in range(col,col+3):
            arr[r][c] = int(not arr[r][c])

n , m = map(int,input().split())
a=[[0 for _ in range(m)] for _ in range(n)]
b=[[0 for _ in range(m)] for _ in range(n)]
for i in range(n):
    row = input()
    for j in range(m):
        a[i][j] = int(row[j])
        
for i in range(n):
    row = input()
    for j in range(m):
        b[i][j] = int(row[j])

result = 0
for i in range(n-2):
    for j in range(m-2):
        if a[i][j] != b[i][j]:
            transArray(a,i,j)
            result += 1

for i in range(n):
    for j in range(m):
        if a[i][j] != b[i][j]:
            result = -1
            break

print(result)