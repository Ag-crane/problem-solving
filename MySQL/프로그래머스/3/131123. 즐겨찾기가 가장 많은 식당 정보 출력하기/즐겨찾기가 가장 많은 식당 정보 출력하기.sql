with max_table as (
    select food_type, max(favorites) as max_favorites
    from rest_info
    group by food_type
)

select r.food_type, rest_id, rest_name, m.max_favorites as favorites
from rest_info r
join max_table m
on r.food_type = m.food_type
where r.favorites = m.max_favorites
order by food_type desc