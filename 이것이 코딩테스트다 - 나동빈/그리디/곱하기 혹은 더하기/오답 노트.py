data = list(map(int,input()))

result = data[0]
for i in range(1,len(data)):
    if result == 0:
        result += data[i]
    elif data[i] in [0,1]:
        result += data[i]
    else:
        result *= data[i]

print(result)

# 반례 : 123 => 6(x) 9(o)
# 뒷 수만 0이나 1인지 확인하고, 앞 수는 0인지만 확인하고 있다.
# 하지만 앞 수도 1이면 더하는게 맞다.
# 애초에 앞 수, 뒷 수 나눌 게 아니라 '둘 중에 하나라도 0이나 1이면' 이라고 생각했어야 했다.
# in 연산자보다 <= 1을 사용하면 연산 수를 줄일 수 있다.