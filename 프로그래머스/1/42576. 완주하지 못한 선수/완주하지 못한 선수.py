def solution(participant, completion):
    answer = ''
    
    count_dict = {}
    for p in participant:
        if p in count_dict:
            count_dict[p] += 1
        else:
            count_dict[p] = 1
    
    for c in completion:
        count_dict[c] -= 1
    
    for key, value in count_dict.items():
        if value == 1:
            answer = key
            break

    return answer