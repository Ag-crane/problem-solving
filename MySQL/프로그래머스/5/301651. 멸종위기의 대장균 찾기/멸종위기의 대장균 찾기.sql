with recursive add_generation as (
    select id, 1 as generation
    from ecoli_data
    where parent_id is null
    
    union all
    
    select b.id, generation + 1
    from add_generation a
    join ecoli_data b
    on a.id = b.parent_id
)

select count(a.id) as count, c.generation
from ecoli_data a
left join ecoli_data b on a.id = b.parent_id
join add_generation c on a.id = c.id
where b.id is null
group by generation
