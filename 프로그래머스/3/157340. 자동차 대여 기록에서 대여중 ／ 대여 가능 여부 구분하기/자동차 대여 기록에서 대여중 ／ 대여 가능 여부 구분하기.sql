SELECT CAR_ID,(
    CASE
        WHEN  MIN(
                CASE
                    WHEN END_DATE < '2022-10-16' OR START_DATE > '2022-10-16' 
                        THEN 1    # 대여 가능
                    ELSE 0    # 대여중
                END
            ) = 1 THEN '대여 가능'
        ELSE '대여중'
    END
    ) AS AVAILABILITY
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
GROUP BY CAR_ID
ORDER BY CAR_ID DESC