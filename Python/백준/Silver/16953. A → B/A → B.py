import sys
input = sys.stdin.readline

a, b = map(int,input().split())
result = 1

while a<b:
    if str(b)[-1] == '1':
        b = int(str(b)[0:len(str(b))-1])
    elif b%2 == 0:
        b = b//2
    else :
        result = -1
        break
    result += 1

if a!=b:
    result = -1
    
print(result)
