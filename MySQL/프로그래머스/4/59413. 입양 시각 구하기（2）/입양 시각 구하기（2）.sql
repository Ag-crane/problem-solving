with recursive hours as (
    select 0 as hour
    union
    select hour + 1
    from hours
    where hour < 23
)

select b.hour, count(a.animal_id) as count
from animal_outs a
    right join hours b
    on hour(a.datetime) = b.hour
group by b.hour