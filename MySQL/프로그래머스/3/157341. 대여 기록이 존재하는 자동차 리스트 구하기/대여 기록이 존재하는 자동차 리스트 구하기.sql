# 자동차 종류가 '세단'인 자동차들 중
# 10월에 대여를 시작한 기록이 있는 자동차 ID 리스트
# 자동차 ID 리스트는 중복이 없어야 하며, 자동차 ID를 기준으로 내림차순 정렬

select distinct c.car_id
from car_rental_company_car c
join car_rental_company_rental_history h
    on c.car_id = h.car_id
where c.car_type = '세단'
    and month(h.start_date) = 10
order by c.car_id desc