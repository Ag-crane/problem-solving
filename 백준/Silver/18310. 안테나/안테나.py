n = int(input())
array = list(map(int,(input().split())))

array.sort()
mid = (len(array)-1)//2

print(array[mid])