from collections import deque

# 바이러스 증식 함수
def spread_virus():
    for _ in range(len(virus_list)):
        virus_num, x, y = virus_list.popleft()  # 가장 낮은 번호의 바이러스부터 처리
        for dx, dy in directions:  # 상, 하, 좌, 우 방향으로 증식
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N and lab[nx][ny] == 0:  # 증식 가능한 경우
                lab[nx][ny] = virus_num  # 바이러스 증식
                virus_list.append((virus_num, nx, ny))  # 증식한 바이러스 추가

N, K = map(int, input().split())  # 시험관의 크기와 바이러스 종류의 수 입력
lab = [list(map(int, input().split())) for _ in range(N)]  # 시험관 정보 입력

virus_list = deque()
for i in range(N):
    for j in range(N):
        if lab[i][j] != 0:
            virus_list.append((lab[i][j], i, j))  # 바이러스 번호와 위치 저장

virus_list = deque(sorted(virus_list))  # 바이러스 번호 순으로 정렬

S, X, Y = map(int, input().split())  # 경과 시간, 확인할 위치 입력

directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # 상, 하, 좌, 우

for _ in range(S):  # S초 동안 증식 반복
    spread_virus()

print(lab[X-1][Y-1])  # S초 후 (X, Y) 위치의 바이러스 종류 출력
