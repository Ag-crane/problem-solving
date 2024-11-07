import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T):

    n = int(input())
    grades = [list(map(int,input().split())) for _ in range(n)]
    grades.sort(key=lambda x:x[0])
    second_grades = list(map(lambda x: x[1],grades)) # 1차시험 성적순으로 정렬
    result = n
    best = second_grades[0]
    for i in range(1,n):
        if second_grades[i] > best : # 1차시험 앞 등수 인원들과 비교해서는 1등이어야함. 한명이라도 등수 밀리면 탈락
            result -= 1
        else:
            best = second_grades[i]
    print(result)