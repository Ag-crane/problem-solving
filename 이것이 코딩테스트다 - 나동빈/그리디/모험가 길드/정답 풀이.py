n = int(input())
data = list(map(int,input().split()))
data.sort() # 오름차순 정렬

result = 0 # 총 그룹의 수
count = 0 # 현재 그룹에 포함된 모험가의 수

for x in data: # 낮은 공포도부터 확인
    count += 1 # 현재 그룹에 해당 모험가 포함
    if count >= x : # 그룹 결성
        result += 1 # 총 그룹 수 증가
        count = 0 # 현재 그룹 초기화
        
print(result)