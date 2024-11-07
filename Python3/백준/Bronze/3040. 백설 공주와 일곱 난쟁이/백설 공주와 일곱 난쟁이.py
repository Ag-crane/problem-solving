lst = []
for i in range(9):
    lst.append(int(input()))

import itertools

nCr = itertools.combinations(lst,7)
for i in nCr:
    if sum(i) == 100:
        new_lst = i
        break
for i in new_lst:
    print(i)