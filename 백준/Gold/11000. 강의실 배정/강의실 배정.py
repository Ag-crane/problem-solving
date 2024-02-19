import heapq
import sys
input = sys.stdin.readline

n = int(input())
classList = [ list(map(int,input().split())) for _ in range(n) ]
classList.sort(key=lambda x:x[0]) # 종료 시간은 heap에서 자동 정렬되므로 시작 시간으로 정렬한다.

# print(classList)
endTimes = [] # 종료시간만 저장하는 heap
heapq.heappush( endTimes, classList[0][1] ) # list로 구현하므로 처음 비어있는 heap에는 append()로 추가해도 되지만, 일관성을 위해 heapq 모듈을 사용한다
# print(endTimes)
for i in range(1,n):
    if classList[i][0] >= endTimes[0] : # 가장 빠른 종료시간(heap의 root)와 다음 강의의 시작시간 비교
        heapq.heappop( endTimes ) # 해당 회의실의 종료시간을 삭제 (회의실 개수 유지)
    
    heapq.heappush( endTimes, classList[i][1] ) # 새 강의의 종료시간을 새로 추가
                                                # 이 때, heap의 속성을 유지하며 추가하므로 자동 재정렬됨
    # print( endTimes )

print(len(endTimes))

