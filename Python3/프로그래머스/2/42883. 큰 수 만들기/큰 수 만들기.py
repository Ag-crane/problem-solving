from itertools import combinations

def solution(number, k):
    answer = ''
def solution(number, k):
    stack = []  # 숫자를 저장할 스택
    for num in number:
        while stack and stack[-1] < num and k > 0:  # 스택이 비어있지 않고, 마지막 숫자가 현재 숫자보다 작으며, 제거할 수 있는 숫자가 남아있는 경우
            stack.pop()  # 스택의 마지막 숫자를 제거
            k -= 1  # 제거한 숫자의 개수를 1 감소
        stack.append(num)  # 현재 숫자를 스택에 추가
    
    if k > 0:  # 제거할 숫자가 남아있다면 스택의 끝에서 제거
        stack = stack[:-k]
    
    return ''.join(stack)  # 스택에 저장된 숫자를 문자열로 변환하여 반환
    '''
    1 2 3 1 2 3 4
    
    
    '''
    
    return answer