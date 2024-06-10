with heavy_user as (
    select host_id, count(*) as cnt
    from places
    group by host_id
    having cnt >= 2
)

select p.id, p.name, p.host_id
from places p
join heavy_user h using (host_id)
order by p.id
