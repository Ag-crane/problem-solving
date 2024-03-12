# 동물의 아이디와 이름, 중성화 여부를 아이디 순으로 조회
# 중성화가 되어있다면 'O', 아니라면 'X'라고 표시
SELECT animal_id, name,
    if (sex_upon_intake Like 'Intact%','X','O') as '중성화'
from animal_ins
order by animal_id