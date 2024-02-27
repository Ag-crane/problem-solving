# 년, 월, 성별 별로 상품을 구매한 회원수를 집계
# 결과는 년, 월, 성별을 기준으로 오름차순 정렬
# 성별 정보가 없는 경우 결과에서 제외

select year(s.sales_date) as year, month(s.sales_date) as month, i.gender, count(distinct i.user_id) as users
from user_info i
join online_sale s
    on i.user_id = s.user_id
where i.gender is not null
group by year, month, i.gender
order by year, month, i.gender