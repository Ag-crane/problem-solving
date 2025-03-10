with ranked_table as (
    select name, salary, departmentId,
        rank() over (partition by departmentId order by salary desc) as 'rank'
    from employee e
)

select d.name as department, r.name as employee, r.salary
from ranked_table r
    join department d on r.departmentId = d.id
where r.rank = 1
