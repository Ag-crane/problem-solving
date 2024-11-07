def can_divide(sticks, length, m):
    count = sum(stick // length for stick in sticks)
    return count >= m

def binary_search(sticks, m):
    start, end = 1, max(sticks)
    result = 0

    while start <= end:
        mid = (start + end) // 2
        if can_divide(sticks, mid, m):
            result = mid
            start = mid + 1
        else:
            end = mid - 1

    return result

m, n = map(int, input().split())
sticks = list(map(int, input().split()))

print(binary_search(sticks, m))
