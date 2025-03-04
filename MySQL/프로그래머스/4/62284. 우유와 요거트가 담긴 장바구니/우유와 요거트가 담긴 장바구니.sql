select cart_id
from cart_products
group by cart_id
having find_in_set('Milk', group_concat(name)) > 0 and find_in_set('Yogurt', group_concat(name)) > 0
order by cart_id