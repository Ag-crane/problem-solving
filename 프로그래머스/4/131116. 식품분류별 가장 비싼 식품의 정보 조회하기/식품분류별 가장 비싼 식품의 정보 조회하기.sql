select a.category, a.price as max_price, a.product_name
from food_product a
join (
    select product_id, category, max(price) as max_price
    from food_product
    where category in ('과자', '국', '김치', '식용유')
    group by category
) b on a.category = b.category and a.price = b.max_price
order by a.price desc