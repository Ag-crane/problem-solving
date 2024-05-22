with Ranked_Ecoli as (
    SELECT 
        id, 
        size_of_colony, 
        (percent_rank() over(order by size_of_colony desc))*100 as percentage
    FROM ecoli_data
)

select e.id, 
    case
        when r.percentage <= 25 then 'CRITICAL'
        when r.percentage <= 50 then 'HIGH'
        when r.percentage <= 75 then 'MEDIUM'
        when r.percentage <= 100 then 'LOW'
    end COLONY_NAME
from ecoli_data e
    join ranked_ecoli r
    on e.id = r.id
order by e.id