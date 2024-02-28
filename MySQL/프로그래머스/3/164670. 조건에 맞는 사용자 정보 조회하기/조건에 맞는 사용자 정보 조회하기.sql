# 중고 거래 게시물을 3건 이상 등록한 사용자의 
# ID, 닉네임, 전체주소, 전화번호를 조회
# 전체 주소는 시, 도로명 주소, 상세 주소가 함께 출력
# 전화번호의 경우 xxx-xxxx-xxxx 같은 형태로 하이픈 문자열(-)을 삽입하여 출력해주세요
# 결과는 회원 ID를 기준으로 내림차순 정렬

select u.user_id, u.nickname, 
    concat_ws(' ',u.city,u.street_address1,u.street_address2) as 전체주소, 
    concat_ws('-',substring(u.tlno,1,3),substring(u.tlno,4,4),substring(u.tlno,8,4)) as 전화번호
from used_goods_board b
join used_goods_user u
    on b.writer_id = u.user_id
group by b.writer_id
having count(b.board_id) >= 3
order by u.user_id desc