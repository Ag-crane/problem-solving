def binary_search(array,target):
    start = 0
    end = len(array) - 1
    while start<=end :
        mid = (start+end) // 2
        
        if array[mid]==target:
            return mid
        elif array[mid]>target:
            end = mid - 1
        else:
            start = mid + 1
    
    return None

n, x = map(int,input().split())
data = list(map(int,input().split()))

# 정렬된 리스트이므로, x가 여러개면 연속되어 존재한다.
# 일단 이분탐색으로 찾고 : O(logN), 앞 뒤로 x가 아닐 때까지 탐색한다 : O(1)  
    ### 오답 : 앞 뒤로 몇 개가 있을 지 모르고, 최대 N개가 다 같을 수 있으므로 O(1)이 아니라 O(N)이다.
    ### 반례 : N이 최대, x로 가득 찬 경우, O(N)으로 시간초과
    ### 'x가 k개 있다고 하면 O(k) 걸리겠구나' 처럼 구체적으로 계산해야 '그럼 최악의 경우 O(N)까지 가겠구나 안되겠네'가 된다

index = binary_search(data,x)
if index == None:
    print(-1)
else:
    count = 1
    i = index+1
    while data[i]==x:
        count += 1
        i += 1

    i = index-1
    while data[i]==x:
        count += 1
        i -= 1

    print(count)

