# 2021년에 가입한 전체 회원들 중
# 상품을 구매한 회원수와 상품을 구매한 회원의 비율(=2021년에 가입한 회원 중 상품을 구매한 회원수 / 2021년에 가입한 전체 회원 수)
# 년, 월 별로 출력

with user_2021 as (
    select count(user_id) as total
    from user_info
    where joined like '2021%'
)

select year(sales_date) as year, month(sales_date) as month, count(distinct user_id) as puchased_users, round(count(distinct user_id)/(select total from user_2021),1) as puchased_ratio
from online_sale
where user_id in (
    select user_id
    from user_info
    where joined like '2021%'
)
group by year, month
order by year, month
