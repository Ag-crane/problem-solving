N, M = map(int, input().split())
lst = list(map(int, input().split()))

import itertools

nCr = itertools.combinations(lst,3)

new_lst=[]

for i in nCr:
    if sum(i) <= M:
        new_lst.append( sum(i) )
print(max(new_lst))