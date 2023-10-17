T = int(input())

for i in range(T):
    arr = list(map(int, input().split()))
    sum = 0
    for j in range(len(arr)):
        if arr[j] % 2 != 0:
           sum += arr[j]
    print(f'#{i+1} {sum}')