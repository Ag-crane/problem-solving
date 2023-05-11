N = int(input())
dict = {}
for i in range(N):
    name, kor, eng, math = input().split()
    dict[name] = [int(kor), int(eng), int(math)]

sorted_dict = sorted(dict.items(), key=lambda x: (-x[1][0], x[1][1], -x[1][2], x[0]))
for i in range(N):
    print(sorted_dict[i][0])