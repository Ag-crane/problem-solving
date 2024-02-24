# select conv(s.code,10,2), conv(d.skill_code,10,2),conv(s.code & d.skill_code, 10, 2)
# from skillcodes s
#     join developers d
#     on s.code & d.skill_code != 0

select distinct d.id, d.email, d.first_name, d.last_name
from developers d
    join skillcodes s
    on s.code & d.skill_code != 0
where category = 'front end'
order by d.id