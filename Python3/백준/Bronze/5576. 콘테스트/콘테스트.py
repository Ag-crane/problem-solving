W_lst = []
K_lst = []

for i in range(10):
    W_lst.append(int(input()))
for i in range(10):
    K_lst.append(int(input()))

W_lst.sort()
K_lst.sort()
print(W_lst[-1]+W_lst[-2]+W_lst[-3], K_lst[-1]+K_lst[-2]+K_lst[-3])