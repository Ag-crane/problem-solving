import sys, heapq
input = sys.stdin.readline

n = int(input())
cards = [int(input()) for _ in range(n)]

result = 0
heapq.heapify(cards)

while len(cards)>1:
    hab = heapq.heappop(cards) + heapq.heappop(cards)
    heapq.heappush(cards,hab)
    result += hab

print(result)