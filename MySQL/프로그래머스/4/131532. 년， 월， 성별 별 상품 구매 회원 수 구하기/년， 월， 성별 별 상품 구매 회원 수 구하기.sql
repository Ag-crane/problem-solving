select year(sales_date) as year, month(sales_date) as month, gender, count(distinct user_id) as users
from user_info i
join online_sale s using(user_id)
group by year, month, gender
having gender is not null
order by year, month, gender