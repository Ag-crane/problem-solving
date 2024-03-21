array = [7,5,9,0,3,1,6,2,4,8]

# 선택 정렬 : O(N^2)
def selection_sort(array):
    for i in range(len(array)):
        min_index = i
        for j in range(i+1,len(array)):
            if array[min_index] > array[j]:
                min_index = j
        array[i], array[min_index] = array[min_index], array[i]

    return array

# 삽입 정렬 : O(N^2)
# 거의 정렬된 상태의 리스트에 대해서는 매우 빠르다. 정렬된 정도에 따라 O(N)에 가까워짐
def insertion_sort(array):
    
    for i in range(1,len(array)): 
        for j in range(i,0,-1):
            if array[j] < array[j-1]:
                array[j], array[j-1] = array[j-1], array[j]
            else:
                return array

# 퀵 정렬 : O(nlogn)
def quick_sort(array,start,end):
    if start >= end:
        return
    
    pivot = start
    left = start+1
    right = end
    
    while left<=right:
        # 피벗보다 큰 데이터 찾기
        while left <= end and array[left] <= array[pivot] :  ##### 등호 주의... 조건 순서 주의...
            left += 1
        # 피벗보다 작은 데이터 찾기
        while right > start and array[right] >= array[pivot]:
            right -= 1
        
        if left > right :   # 엇갈렸으면 작은 데이터와 피벗 교체 -> while문 탈출, 분할
            array[right], array[pivot] = array[pivot], array[right]
        else:   # 엇갈리지 않았으면 작은 데이터와 큰 데이터 교체
            array[right], array[left] = array[left], array[right]
    # 분할 후 각각 퀵정렬 수행
    quick_sort(array, start, right-1)
    quick_sort(array, right+1, end)
    
    return array

print(quick_sort(array,0,len(array)-1))
