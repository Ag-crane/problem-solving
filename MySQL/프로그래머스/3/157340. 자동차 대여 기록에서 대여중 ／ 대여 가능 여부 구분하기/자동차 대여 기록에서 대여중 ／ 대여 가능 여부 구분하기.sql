with rented as (
    select car_id
    from CAR_RENTAL_COMPANY_RENTAL_HISTORY
    where start_date <= '2022-10-16' and end_date >= '2022-10-16'
)

select distinct a.car_id,
    case
        when b.car_id is null then '대여 가능'
        else '대여중'
    end as AVAILABILITY
from CAR_RENTAL_COMPANY_RENTAL_HISTORY a
left join rented b
on a.car_id = b.car_id
order by a.car_id desc

