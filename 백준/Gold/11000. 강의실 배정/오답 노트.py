# 오답 풀이 (시간 초과)

n = int(input())
classList = [ list(map(int,input().split())) for _ in range(n) ]
classList.sort(key=lambda x:(x[1],x[0]))

endTimes = [0] # 회의실 별 종료 시간만 저장

for c in classList:
    clear = 0
    for i in range(len(endTimes)):
        if c[0] >= endTimes[i]:     
            endTimes[i] = c[1]  
            clear = 1
            break
    if clear == 0:
        endTimes.append(c[1])

print(len(endTimes))

'''
문제점 : 현재 회의실을 모두 조회하며 빈 강의실이 있는지, 추가 개설해야 하는지 판단해야 함 => 강의마다 O(N) => O(N^2)
자동 정렬되어 우선순위가 유지되는 heap을 이용하는 경우
root의 종료시간과 비교해서 더 작다면, 다른 회의실도 이용 불가하므로 root와만 비교하면 된다.

예시 input
7
1 3
2 4
2 5
3 5
4 7
5 7
6 8

배열을 사용하는 경우 endTimes : [3] -> [3,4] -> [3,4,5] -> [5,4,5] -> [5,7,5] -> [7,7,5] -> [7,7,8]
    매번 처음부터 끝까지 조회해야함 (최악의 경우) => O(N)
힙을 사용하는 경우 : [3] -> [3,4] -> [3,4,5] -> [4,5,5] -> [5,5,7] -> [5,7,7] -> [7,7,8]
    매번 맨 앞만 조회하고 (O(1)) 필요에 따라 맨앞 삭제 (O(1)), 맨뒤 삽입 (O(1)) 
    
처음 강의를 종료 시간으로 정렬할 경우, 다음 반례에서 5가 나온다. 3이 정답임
8
1 8
9 16
3 7
8 10
10 14
5 6
6 11
11 12


'''