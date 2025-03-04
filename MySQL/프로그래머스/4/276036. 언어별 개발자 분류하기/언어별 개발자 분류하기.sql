with grouped as (
    select id, group_concat(distinct category) as categories, group_concat(name) as skills
    from developers d
    join skillcodes s
    where skill_code & code > 0
    group by id
)

select 
    case
        when find_in_set('Front End', categories) > 0 and find_in_set('Python', skills) then 'A'
        when find_in_set('C#', skills) > 0 then 'B'
        when find_in_set('Front End', categories) > 0 then 'C'
    end as grade,
    id,
    email
from grouped g
join developers d
using (id)
where find_in_set('Front End', categories) > 0 or find_in_set('C#', skills) > 0
order by grade, id

