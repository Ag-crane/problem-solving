-- 코드를 입력하세요
SELECT I.NAME, I.DATETIME
FROM ANIMAL_INS I
    LEFT JOIN ANIMAL_OUTS O
    ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE O.ANIMAL_ID IS NULL
ORDER BY I.DATETIME
LIMIT 3
#  입양을 못 간 동물 중 
#  가장 오래 보호소에 있었던 동물 3마리
#  이름과 보호 시작일을 조회
#  결과는 보호 시작일 순으로