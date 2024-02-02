-- 코드를 입력하세요
SELECT B.TITLE, B.BOARD_ID, R.REPLY_ID, R.WRITER_ID, R.CONTENTS, DATE_FORMAT(R.CREATED_DATE,'%Y-%m-%d')
from used_goods_board B
    join used_goods_reply R
    on B.BOARD_ID = R.BOARD_ID
where DATE_FORMAT(B.CREATED_DATE, '%Y-%m') = '2022-10'
order by R.created_date, b.title
