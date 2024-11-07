import sys
from collections import deque
input = sys.stdin.readline

loc = input()

loc = [int(loc[1]), ord(loc[0]) - ord('a') + 1]

move = [(2,1),(2,-1),(-2,1),(-2,-1),(1,2),(1,-2),(-1,2),(-1,-2)]
count = 0
for (dx,dy) in move:
    if loc[0]+dx >= 1 and loc[0]+dx <= 8 and loc[1]+dy > 0 and loc[1]+dy <= 8:
        count += 1

print(count)