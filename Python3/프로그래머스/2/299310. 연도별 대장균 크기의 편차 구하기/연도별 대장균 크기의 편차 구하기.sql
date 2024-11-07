with find_max as (
    select year(differentiation_date) as year, max(size_of_colony) as "max"
    from ecoli_data
    group by year
)

select a.year, (b.max - a.size_of_colony) as year_dev, a.id
from (
    select id, year(differentiation_date) as year, size_of_colony
    from ecoli_data
) a
    join find_max b on a.year = b.year
order by year, year_dev


