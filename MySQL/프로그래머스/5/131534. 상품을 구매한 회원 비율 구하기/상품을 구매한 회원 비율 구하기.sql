select count(*) into @count
from user_info
where joined like '2021%';


select year(sales_date) as year, month(sales_date) as month, count(distinct user_id) as purchased_users, round(count(distinct user_id)/@count, 1) as puchased_ratio
from online_sale
where user_id in (
    select user_id
    from user_info
    where joined like '2021%'
)
group by year, month
order by year, month