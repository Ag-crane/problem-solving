# 정렬된 리스트이므로, x가 여러개면 연속되어 존재한다.
# 맨 처음 x와 맨 마지막 x를 각각 이분탐색으로 찾을 수 있다.

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

def count_value(array, x):
    n = len(array)
    first = binary_search_first(array,x,0,n)
    if first == None:
        return 0
    last = binary_search_last(array,x,0,n)
    return last - first + 1

n, x = map(int,input().split())
array = list(map(int,input().split()))

count = count_value(array,x)
if count == 0:
    print(-1)
else:
    print(count)
