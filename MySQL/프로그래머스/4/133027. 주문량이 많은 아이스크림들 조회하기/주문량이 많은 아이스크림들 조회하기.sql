# 7월 아이스크림 총 주문량과 상반기의 아이스크림 총 주문량을 더한 값
# 큰 순서대로 상위 3개의 맛을 조회
SELECT FH.FLAVOR
FROM FIRST_HALF FH
    JOIN (
        SELECT FLAVOR, SUM(TOTAL_ORDER) AS 'TOTAL_ORDER'
        FROM JULY
        GROUP BY FLAVOR
        ) J
    ON FH.FLAVOR = J.FLAVOR
ORDER BY FH.TOTAL_ORDER + J.TOTAL_ORDER DESC
LIMIT 3
