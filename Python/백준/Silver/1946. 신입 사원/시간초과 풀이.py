import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T):

    n = int(input())
    grades = [list(map(int,input().split())) for _ in range(n)]
    grades.sort(key=lambda x:x[0])
    # print(grades)
    count = 0
    for i in range(1,n):
        for j in range(i):
            if grades[i][1] > grades[j][1] :
                count += 1
                # print(i,j)
                break
    print(n-count)