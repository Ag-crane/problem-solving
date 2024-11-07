from itertools import permutations

def solution(k, dungeons):
    answer = -1
    
    P = list(permutations(dungeons,len(dungeons))) # 가능한 모든 순서
    for sequence in P:
        current = k
        count = 0
        for need, cost in sequence:
            if current >= need:
                current -= cost
                count += 1
            else: 
                break
        answer = max(count,answer)
    
    return answer