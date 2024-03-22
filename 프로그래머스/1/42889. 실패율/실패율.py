def solution(N, stages):
    stage_reached = [0] * (N + 1)  # 각 스테이지에 도달한 플레이어 수 (인덱스 0은 사용하지 않음)
    stage_not_cleared = [0] * (N + 1)  # 각 스테이지에서 멈춰있는 플레이어 수 (인덱스 0은 사용하지 않음)

    # 각 스테이지에 도달한 플레이어 수와 멈춰있는 플레이어 수 계산
    for stage in stages:
        for i in range(1, stage):
            stage_reached[i] += 1
        if stage <= N:  # N+1 스테이지는 모든 스테이지를 클리어한 것이므로 제외
            stage_reached[stage] += 1
            stage_not_cleared[stage] += 1

    # 실패율 계산 및 (실패율, 스테이지 번호) 튜플 리스트 생성
    fail_rates = []
    for i in range(1, N + 1):
        if stage_reached[i] == 0:  # 스테이지에 도달한 플레이어가 없는 경우
            fail_rate = 0
        else:
            fail_rate = stage_not_cleared[i] / stage_reached[i]
        fail_rates.append((fail_rate, i))

    # 실패율에 따라 정렬 (실패율이 같을 경우 스테이지 번호가 작은 순으로)
    fail_rates.sort(key=lambda x: (-x[0], x[1]))

    # 정렬된 스테이지 번호 추출
    answer = [stage for _, stage in fail_rates]
    return answer