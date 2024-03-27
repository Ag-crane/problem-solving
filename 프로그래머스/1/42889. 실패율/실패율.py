def solution(N, stages):
    answer = []
    # 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    # playing / all_reached
    playing = [0]*(N+1)
    all_reached = [0]*(N+1)
    for i in range(len(stages)):
        if stages[i]==N+1 :
            for j in range(1,N+1):
                all_reached[j] += 1
        else:
            playing[stages[i]] += 1
            for j in range(1,stages[i]+1):
                all_reached[j] += 1
    failure_lst = []
    for i in range(1,N+1):
        if all_reached[i]==0:
            failure_lst.append((0,i))
        else:
            failure_lst.append((playing[i] / all_reached[i],i))
    failure_lst.sort(key=lambda x:(-x[0],x[1]))
    
    for i in range(N):
        answer.append(failure_lst[i][1])
    
    return answer