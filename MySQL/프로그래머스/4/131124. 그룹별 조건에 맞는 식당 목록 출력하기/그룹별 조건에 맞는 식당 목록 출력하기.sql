with ranked_cte as (
    select member_id, count(*) as 'count', rank() over (order by count(*) desc) as 'rank'
    from rest_review
    group by member_id
    order by count desc
)

select a.MEMBER_NAME, b.REVIEW_TEXT, date_format(b.REVIEW_DATE, '%Y-%m-%d') as REVIEW_DATE
from member_profile a
join rest_review b on a.member_id = b.member_id
join ranked_cte c on a.member_id = c.member_id
where c.rank = 1
order by REVIEW_DATE, REVIEW_TEXT