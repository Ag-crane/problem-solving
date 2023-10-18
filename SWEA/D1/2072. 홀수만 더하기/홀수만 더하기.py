T = int(input())

for test_case in range(1, T + 1):
    
    arr = list(map(int, input().split()))
    sum = 0
    for j in range(len(arr)):
        if arr[j] % 2 != 0:
           sum += arr[j]
    print(f'#{test_case} {sum}')
