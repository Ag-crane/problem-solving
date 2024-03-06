import sys
from collections import deque
input = sys.stdin.readline

count = 1

n, m = map(int,input().split())
a, b, direction = map(int,input().split())
map = [list(map(int,input().split())) for _ in range(n)]

steps = [(-1,0),(0,-1),(1,0),(0,1)] # 북:0,서:1,남:2,동:3
goback = False
print('시작 위치 : ',a,b)

while True :
    print(map)
    # 가본 칸은 바다로 취급
    map[a][b] = 1
    for i in range(4): # 네 방향에 대해 수행
        # 왼쪽으로 회전
        direction = (direction + 1) % 4
        print('direction:',direction)
        # 목적지
        dest = [a+steps[direction][0],b+steps[direction][1]]
        print(dest)
        # 앞에 보이는 칸이 육지인 경우
        if map[dest[0]][dest[1]] == 0: 
            # 이동
            [a, b] = dest
            print('이동 후 위치 : ',a,b)
            count += 1
            break
        # 바다인 경우 : 다음 방향 탐색
        
        if i==3: # 네 방향 모두 탐색한 경우
            goback = True
    
    if goback:
        dest = [a-steps[direction][0],b-steps[direction][1]] # 뒤로 갈 위치
        # 뒤로 갈 위치가 육지면, 뒤로 이동
        if map[dest[0]][dest[1]] == 0:
            [a, b] = dest
            count += 1
        # 뒤로 갈 위치가 바다면, 움직임을 멈춘다 = 전체 반복문 탈출
        else:
            break
    
print(count)