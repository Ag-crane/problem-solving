n = int(input())
x_lst = list(map(int,input().split(" ")))
x_lst.sort(reverse=True) # 남는게 가능하다면, 공포도가 높은 놈이 남아야 함.
                        # 오름차순 정렬해서 낮은 놈부터 포함시켰어야 했음

groups = [] # 사용하지 않을 객체를 굳이 만들 필요 없음. 개수 세는 변수만 있으면 됨
            # 마지막에 len()으로 개수만 세줄거면 뭐하러 힘들게 리스트 만들어?
curIndex = 0

# 공포도가 높은 놈부터 포함시킬 때의 풀이.
while True:
    nextIndex = curIndex + x_lst[curIndex]
    groups.append(x_lst[curIndex:nextIndex])
    if nextIndex >= len(x_lst): break
    else : curIndex = nextIndex
    
print(len(groups))

# 반례 : 1 2 2 4 5 7 9 10 => 원래는 1 / 2, 2 로 2개 그룹이 나와야 하지만,
# 전체 다 포함된 1개 그룹만 나와버림
# 파이썬 리스트는 인덱스가 넘어가도 슬라이싱에 오류가 안난다. x_lst[0:100] 해도 오류안남
