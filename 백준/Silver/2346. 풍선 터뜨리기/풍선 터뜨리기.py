from collections import deque

n = int(input())  # 풍선의 개수 입력
data = list(map(int, input().split()))  # 각 풍선 안의 숫자 입력

dq = deque([i for i in range(1, n+1)])  # 풍선의 초기 순서를 데크로 생성

while dq:
    target = dq.popleft()  # 현재 풍선을 터뜨림
    print(target, end=' ')  # 터뜨린 풍선의 번호 출력

    if dq:  # 아직 터뜨릴 풍선이 남아있다면
        move = data[target-1]  # 터뜨린 풍선 안의 숫자로 이동할 거리 결정
        dq.rotate(-move if move < 0 else -(move-1))  # 풍선 이동(음수일 경우 그대로, 양수일 경우 1 감소)
