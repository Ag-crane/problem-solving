import sys
input = sys.stdin.readline

n = int(input())
stack = []

for _ in range(n):
    inputStr = input().strip()
    if len(inputStr) == 1:
        order = int(inputStr)
    else:
        [order, X] = list(map(int,inputStr.split()))  
        
    if order == 1:
        stack.append(X)
    elif order == 2:
        if len(stack)==0:
            print(-1)
        else :
            print(stack.pop())
    elif order == 3:
        print(len(stack))
    elif order == 4:
        if len(stack) == 0:
            print(1)
        else : 
            print(0)
    elif order == 5:
        if len(stack) != 0:
            print(stack[-1])
        else:
            print(-1)



