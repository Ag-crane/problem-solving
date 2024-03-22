# 선택 정렬 : O(n^2)
def selection_sort(array):
    for i in range(len(array)):
        min_index = i
        for j in range(i+1,len(array)):
            if array[min_index] > array[j]:
                min_index = j
        array[i], array[min_index] = array[min_index], array[i]

    return array

# 삽입 정렬 : O(n^2)
# 거의 정렬된 상태의 리스트에 대해서는 매우 빠르다. 정렬된 정도에 따라 O(N)에 가까워짐
def insertion_sort(array):
    
    for i in range(1,len(array)): 
        for j in range(i,0,-1):
            if array[j] < array[j-1]:
                array[j], array[j-1] = array[j-1], array[j]
            else:
                return array

# 퀵 정렬 : O(nlogn) ~ O(n^2)
# 피벗을 어떻게 정하냐에 따라 속도의 차이가 있다
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

# 계수 정렬 : O(n+k) *k는 최댓값 
# 데이터의 개수가 한정돼있을 때(많아도 됨), 최댓값과 최솟값의 차이가 너무 크지 않을 때 사용 가능하다
# 동일한 값이 중복돼있을 때, 많이 중복돼있을수록 유리하다
# 데이터의 특성을 파악하기 어렵거나 위 조건을 만족하지 못하면 퀵 정렬이 유리하다
def count_sort(array):
    count = [0] * (max(array)+1)
    
    for i in range(len(array)):
        count[array[i]] += 1

    result = []
    for i in range(len(count)):
        for j in range(count[i]):
            result.append(i)
    return result


array = [7,5,9,0,3,1,6,2,4,8]
array2 = [7,5,9,0,3,1,6,2,4,8,5,1,2,9]

# print(quick_sort(array,0,len(array)-1))
print(count_sort(array2))