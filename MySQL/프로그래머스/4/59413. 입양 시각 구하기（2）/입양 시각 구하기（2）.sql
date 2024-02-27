with recursive hours as (
    select 0 as hour
    union
    select hour + 1
    from hours
    where hour < 23
)

select b.hour, if(a.count is null,0,a.count) as count
from (
    select hour(datetime) as hour, count(*) as count
    from animal_outs
    group by hour(datetime)
) a
    right join hours b
    on a.hour = b.hour