# select a.id, b.id as first
# from ecoli_data a
# join ecoli_data b
# on a.id = b.parent_id

with fst as (
    select id
    from ecoli_data
    where parent_id is NULL
), snd as (
    select e.id
    from ecoli_data e
    join fst f
    on e.parent_id = f.id
)

select e.id
from ecoli_data e
join snd s
on e.parent_id = s.id
order by id
