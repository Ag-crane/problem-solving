import sys, heapq
input = sys.stdin.readline

n = int(input())
array = list(map(int,input().split()))

def binary_search(array):
    start = 0
    end = n-1

    while start <= end:
        mid = (start + end) // 2
        
        if array[mid] == mid:
            return mid
        elif array[mid] < mid:  # 고정점이 왼쪽에 존재할 수 없음
            start = mid + 1
        else:   # 고정점이 오른쪽에 존재할 수 없음
            end = mid - 1

    return -1

print(binary_search(array))