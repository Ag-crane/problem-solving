select p.product_id, p.product_name, sum(o.amount*p.price) as total_sales
from food_order o
join food_product p using(product_id)
where o.produce_date like '2022-05%'
group by p.product_id, p.product_name
order by total_sales desc, p.product_id