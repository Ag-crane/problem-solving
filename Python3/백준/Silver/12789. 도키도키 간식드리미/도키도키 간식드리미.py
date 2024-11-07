import sys
input = sys.stdin.readline
 
n = int(input())
data = list(map(int,input().split()))
stack = []
count = 1
for num in data :
    if num != count:
        stack.append(num)
    elif num == count:
        count += 1
    # top이 다음 순서일 경우
    while len(stack) != 0:
        if stack[-1] == count:
            stack.pop()
            count += 1
        else:
            break
        
answer = 'Nice'
if len(stack) != 0 :
    for i in range(len(stack)-1):
        if stack[i] < stack[i+1] :
            answer = 'Sad'
            break
print(answer)