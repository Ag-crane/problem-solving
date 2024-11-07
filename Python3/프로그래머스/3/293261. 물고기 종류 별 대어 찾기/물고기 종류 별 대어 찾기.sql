select a.id, c.fish_name, b.max_length as length
from fish_info a
    join (
        select fish_type, max(length) as max_length
        from fish_info
        group by fish_type
    ) b on a.fish_type = b.fish_type
    join fish_name_info c on b.fish_type = c.fish_type
where a.length = b.max_length
    