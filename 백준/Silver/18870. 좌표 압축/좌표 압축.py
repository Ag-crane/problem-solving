N = int(input())
X = list(map(int, input().split()))

# 좌표를 복사하고 정렬
sorted_X = sorted(list(set(X)))

# 정렬된 좌표에서 각 값의 인덱스를 찾아 사전에 저장
index_dict = {value: index for index, value in enumerate(sorted_X)}

# 원래 좌표 배열을 순회하며 각 좌표 값에 해당하는 인덱스를 결과 배열에 저장
compressed = [index_dict[x] for x in X]

print(' '.join(map(str, compressed)))
