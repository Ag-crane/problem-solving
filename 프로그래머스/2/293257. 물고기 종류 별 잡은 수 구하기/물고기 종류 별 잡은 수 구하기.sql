with type_count as (select fish_type, count(*) as fish_count
from fish_info group by fish_type)

select a.fish_count, b.fish_name 
from type_count a
    left join fish_name_info b 
    on a.fish_type = b.fish_type
order by fish_count desc;