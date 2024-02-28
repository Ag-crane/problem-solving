# 입양을 간 동물 중, 보호 기간이 가장 길었던 동물 두 마리의 아이디와 이름
# 보호 기간이 긴 순으로

select i.animal_id, i.name
from animal_ins i
join animal_outs o
    on i.animal_id = o.animal_id
order by datediff(o.datetime,i.datetime) desc
limit 2
