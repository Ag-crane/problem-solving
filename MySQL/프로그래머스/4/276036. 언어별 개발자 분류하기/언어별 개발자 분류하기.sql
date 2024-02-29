select 
    case
        when group_concat(s.name) like '%Python%' and
            group_concat(s.category) like '%Front End%' then 'A'
        when group_concat(s.name) like '%C#%' then 'B'
        when group_concat(s.category) like '%Front End%' then 'C'
    end as grade,
    d.id,
    d.email
from developers d
join skillcodes s on d.skill_code & s.code <> 0
group by d.id, d.email
having grade is not null
order by grade, d.id