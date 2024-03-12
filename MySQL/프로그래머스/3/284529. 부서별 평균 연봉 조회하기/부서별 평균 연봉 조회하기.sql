# 부서별 평균 연봉
# 부서별로 부서 ID, 영문 부서명, 평균 연봉을 조회
# 평균연봉은 소수점 첫째 자리에서 반올림하고 컬럼명은 AVG_SAL
# 부서별 평균 연봉을 기준으로 내림차순 정렬

select d.dept_id, d.dept_name_en, round(avg(e.sal)) as avg_sal
from hr_department d
join hr_employees e on d.dept_id = e.dept_id 
group by d.dept_id
order by avg_sal desc