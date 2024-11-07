# 고정비용 A, 가변비용 B
# 총 비용 = A+B*x
# 판매량(x)*책정가(C) = 판매비용
# 손익분기점 : 판매비용 > 총 비용

A, B, C = map(int, input().split())
x=0
if B>=C:
  x=-1
else:
   x = int(A / (C-B) +1)
print(x)