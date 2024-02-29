# 자동차 종류가 '트럭'인 자동차의 대여 기록에 대해서
# 기록 별로 대여 금액(컬럼명: FEE)을 구하여
# 대여 기록 ID와 대여 금액 리스트를 출력
# 대여 금액을 기준으로 내림차순 정렬하고, 대여 금액이 같은 경우 대여 기록 ID를 기준으로 내림차순 정렬

select rh.history_id, floor((datediff(end_date,start_date)+1)*c.daily_fee*if(discount_rate is null,1,(100-dp.discount_rate)/100)) as fee
from car_rental_company_car c
join car_rental_company_rental_history rh
    on c.car_id = rh.car_id
left join car_rental_company_discount_plan dp
    on c.car_type = dp.car_type
    and case
        when datediff(end_date,start_date)+1 >= 90 then '90일 이상'
        when datediff(end_date,start_date)+1 >= 30 then '30일 이상'
        when datediff(end_date,start_date)+1 >= 7 then '7일 이상'
        else null
    end = dp.duration_type
where c.car_type = '트럭'
order by fee desc, rh.history_id desc