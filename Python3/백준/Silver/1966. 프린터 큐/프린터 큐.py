from collections import deque

T = int(input())

for _ in range(T):
    n, m = map(int, input().split())

    arr = list(map(int,input().split()))
    arr_with_index = [(i,arr[i]) for i in range(n)]
    q = deque(arr_with_index)

    count = 0
    while True:
        is_important = True
        current = q.popleft()
        for other in q:
            if current[1] < other[1]:
                is_important = False
                q.append(current)
                break
        if is_important:
            count += 1
            if current[0] == m:
                print(count)
                break