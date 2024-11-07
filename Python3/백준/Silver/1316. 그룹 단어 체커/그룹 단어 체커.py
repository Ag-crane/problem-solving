N = int(input())
count = 0
for i in range(N):
  word = input()
  letters = []
  for i in range(len(word)):
    if word[i] not in letters:
      letters.append(word[i])
    elif word[i]!=word[i-1]:
      is_groupword = 0
      break
    is_groupword = 1
  count += is_groupword
print(count)