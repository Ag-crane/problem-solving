def solution(n, lost, reserve):
    # 실제 여벌 체육복을 가져온 학생 중에서 도난 당하지 않은 학생 찾기
    real_reserve = set(reserve) - set(lost)
    # 도난 당했지만 여벌 체육복이 없는 학생 찾기
    real_lost = set(lost) - set(reserve)
    
    for r in real_reserve:
        # 여벌 체육복이 있는 학생의 앞번호 학생이 체육복을 잃어버렸는지 확인
        if r - 1 in real_lost:
            real_lost.remove(r - 1)
        # 여벌 체육복이 있는 학생의 뒷번호 학생이 체육복을 잃어버렸는지 확인
        elif r + 1 in real_lost:
            real_lost.remove(r + 1)
    
    # 체육수업을 들을 수 있는 학생의 수는 전체 학생 수에서 여벌 체육복을 받지 못한 학생 수를 뺀 것
    return n - len(real_lost)