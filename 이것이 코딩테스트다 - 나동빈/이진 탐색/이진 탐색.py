## 순차 탐색 : O(n)
def sequencial_search(array,target):
    
    for i in range(len(array)):
        if array[i]==target:
            return i
        else:
            return None

## 이진 탐색 : O(logn)
# 이미 정렬된 리스트에 사용 가능

# 재귀함수로 구현
def recursive_binary_search(array,target,start,end):
    mid = (end + start) // 2
    if start > end:  # 등호 없어야함 중요
        return None
    if target == array[mid] :
        return mid
    elif target < array[mid] :
        return recursive_binary_search(array,target,start,mid-1)
    elif target > array[mid] :
        return recursive_binary_search(array,target,mid+1,end)
    

# 반복문으로 구현
def iterative_binary_search(array,target):
    start = 0
    end = len(array)
    while start <= end:
        mid = (start + end) // 2
        if target == array[mid]:
            return mid
        elif target < array[mid]:
            end = mid - 1
        elif target > array[mid]:
            start = mid + 1
    return None

sorted_array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
target = 15
print(recursive_binary_search(sorted_array,target,0,len(sorted_array)))
print(iterative_binary_search(sorted_array,target))

# 맨 처음 x 찾기
def binary_search_first(array, target, start, end):
    if start > end:
        return None
    mid = (start + end) // 2
    # x를 찾았을 때 가장 왼쪽에 있는 경우에만 반환
    if (mid == 0 or array[mid-1] < array[mid]) and array[mid] == target:
        return mid
    elif array[mid] >= target:      # 등호 : 찾았는데 맨 왼쪽이 아닌 경우도 왼쪽 탐색
        binary_search_first(array, target, start, mid-1)
    else :       
        binary_search_first(array, target, mid+1, end)

# 맨 마지막 x 찾기
def binary_search_last(array, target, start, end):
    if start > end:
        return None
    mid = (start + end) // 2
    # x를 찾았을 때 가장 오른쪽에 있는 경우에만 반환
    if (mid == len(array) or array[mid+1] > array[mid]) and array[mid] == target:
        return mid
    elif array[mid] <= target:      # 등호 : 찾았는데 맨 오른쪽이 아닌 경우도 오른쪽 탐색
        binary_search_last(array, target, mid+1, end)
    else :       
        binary_search_last(array, target, start, mid-1)