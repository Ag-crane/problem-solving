select distinct c.car_id, c.car_type, floor(daily_fee*30*(100-discount_rate)/100) as fee
from CAR_RENTAL_COMPANY_CAR c
join CAR_RENTAL_COMPANY_DISCOUNT_PLAN p on p.car_type = c.car_type and p.duration_type = '30일 이상'
where c.car_type in ('세단', 'SUV')
    and c.car_id not in (
        select car_id
        from CAR_RENTAL_COMPANY_RENTAL_HISTORY
        where start_date <= '2022-11-30' and end_date >= '2022-11-01'
    )
    and floor(daily_fee*30*(100-discount_rate)/100) >= 500000 
    and floor(daily_fee*30*(100-discount_rate)/100) < 2000000
order by fee desc, car_type, car_id desc

