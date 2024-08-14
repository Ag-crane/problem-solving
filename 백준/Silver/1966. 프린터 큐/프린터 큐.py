from collections import deque

def printer_queue(test_cases):
    results = []
    for case in test_cases:
        n, m, priorities = case
        queue = deque([(priorities[i], i) for i in range(n)])
        count = 0

        while queue:
            current = queue.popleft()
            if any(current[0] < q[0] for q in queue):
                queue.append(current)
            else:
                count += 1
                if current[1] == m:
                    results.append(count)
                    break
    return results

# 입력 처리
t = int(input())
test_cases = []
for _ in range(t):
    n, m = map(int, input().split())
    priorities = list(map(int, input().split()))
    test_cases.append((n, m, priorities))

# 결과 출력
results = printer_queue(test_cases)
for result in results:
    print(result)
