with best_reviewers as (
    select member_id, count(*) as count
    from rest_review
    group by member_id
    having count = (
                select count(*) as count
                from rest_review
                group by member_id
                order by count desc
                limit 1
            )
)

select p.member_name, r.review_text, date_format(r.review_date, '%Y-%m-%d') as review_date
from member_profile p 
join rest_review r on p.member_id = r.member_id
join best_reviewers b on r.member_id = b.member_id
order by r.review_date, r.review_text


