# 조회수가 가장 높은 중고거래 게시물에 대한 첨부파일 경로
#  /home/grep/src/게시글id/파일id파일name파일확장자

select concat('/home/grep/src/',board_id,'/',file_id,file_name,file_ext) as file_path
from used_goods_file
where board_id = (
    SELECT board_id
    from used_goods_board
    order by views desc
    limit 1
)
order by file_id desc

