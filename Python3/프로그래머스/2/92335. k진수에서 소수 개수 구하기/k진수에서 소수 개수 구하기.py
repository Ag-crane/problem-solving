# 10진수 -> k진수 변환하는 함수
def convert_base(n, k):
    result = ''
    while n > 0:
        result += str(n % k)
        n = n // k
    
    return result[::-1]

# 소수인지 판별하는 함수
def is_prime_number(n):
    if n==1:
        return False

    for i in range(2,int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

def solution(n, k):
    answer = 0

    for i in list(convert_base(n, k).split('0')):
        print(i)
        if i == '':
            continue
        if is_prime_number(int(i)):
            answer += 1

    return answer