n, m = map(int,input().split())
lst = []
dct = {}
for i in range(n):
    input_value = input()
    lst.append(input_value)
    dct[input_value] = i+1

for _ in range(m):
    input_value = input()
    try:
        print(lst[int(input_value)-1])
    except:
        print(dct[input_value])
