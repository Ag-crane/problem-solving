n,m = map(int, input().split())
numbers = list(map(int,input().split()))

for i in range(m):
    numbers.sort()
    # print(numbers)
    addNum = numbers[0]+numbers[1]
    numbers[0] = addNum
    numbers[1] = addNum
    
print(sum(numbers))