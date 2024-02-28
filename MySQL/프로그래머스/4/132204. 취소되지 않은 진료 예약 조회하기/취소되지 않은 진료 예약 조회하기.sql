# 2022년 4월 13일 취소되지 않은 흉부외과(CS) 진료 예약 내역을 조회
# 진료예약번호, 환자이름, 환자번호, 진료과코드, 의사이름, 진료예약일시 항목이 출력
# 진료예약일시를 기준으로 오름차순 정렬

select a.apnt_no,p.pt_name,p.pt_no,a.mcdp_cd,d.dr_name,a.apnt_ymd
from appointment a
join doctor d on a.mddr_id = d.dr_id
join patient p on a.pt_no = p.pt_no
where a.mcdp_cd = 'cs'
    and a.apnt_cncl_ymd is null
    and a.apnt_ymd like '2022-04-13%'
order by a.apnt_ymd