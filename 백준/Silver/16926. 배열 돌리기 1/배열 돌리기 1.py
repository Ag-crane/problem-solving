from collections import deque
import sys

def printArr(arr):      
    rows = len(arr)
    cols = len(arr[0])
    for i in range(rows):
        for j in range(cols):
            print(arr[i][j],end=' ')
        print()
    # print('-------------')

input = sys.stdin.readline

n, m, r = map(int,input().split())

arr = [list(map(int,input().split())) for _ in range(n)]
newArr = [[0 for _ in range(m)] for _ in range(n)]

s = 0   # 껍질(shell)

while min(n,m)/2 > s:
    # 껍질별로 큐에 담기
    queue = deque()
    for i in range(s,n-s):      # 좌변
        queue.append(arr[i][s])
    for i in range(s+1,m-s):    # 하변
        queue.append(arr[n-s-1][i])  
    for i in range(n-s-2,s-1,-1):      # 우변
        queue.append(arr[i][m-s-1])   
    for i in range(m-s-2,s,-1):      # [상변
        queue.append(arr[s][i])

    # 회전
    queue.rotate(r)
    
    # 다시 배열로 만들기
    for i in range(s,n-s):  
        newArr[i][s] = queue.popleft()
    for i in range(s+1,m-s): 
        newArr[n-s-1][i] = queue.popleft() 
    for i in range(n-s-2,s-1,-1):
        newArr[i][m-s-1] = queue.popleft()   
    for i in range(m-s-2,s,-1):
        newArr[s][i] = queue.popleft()
    
    # 다음 껍질 세팅
    s += 1

printArr(newArr)