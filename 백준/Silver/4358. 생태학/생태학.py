import sys
from collections import defaultdict
input = sys.stdin.read

tree_count = defaultdict(int)
trees = input().splitlines()
total = 0

for tree in trees:
    tree_count[tree] += 1
    total += 1

sorted_trees = sorted(tree_count.keys())

for tree in sorted_trees:
    percentage = (tree_count[tree] / total) * 100
    print(f'{tree} {percentage:.4f}')
