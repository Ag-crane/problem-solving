lst = list(map(int, [input() for _ in range(5)]))
avg = int(sum(lst)/len(lst))
med_index = round(len(lst)//2)
med = sorted(lst)[med_index]
print(avg,med,sep='\n')