select c.item_id, c.item_name, c.rarity
from item_info c
join (
    select b.item_id
    from (
        select item_id
        from item_info
        where rarity = 'RARE'
        ) a
    join item_tree b
    on a.item_id = b.parent_item_id
) d
on c.item_id = d.item_id
order by c.item_id desc
