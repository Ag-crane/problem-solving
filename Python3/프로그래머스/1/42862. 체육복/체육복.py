def solution(n, lost, reserve):
    answer = n - len(lost)
    lost.sort()
    reserve.sort()
    jungbok = []
    for num in lost:
        if num in reserve:
            jungbok.append(num)
    for num in jungbok:
        lost.remove(num)
        reserve.remove(num)
        answer+=1
            
    if len(lost)==0 or len(reserve)==0:
        return answer
    
    for num in lost :
        if num-1 in reserve:
            reserve.remove(num-1)
            answer += 1
        elif num+1 in reserve:
            reserve.remove(num+1)
            answer += 1
    return answer