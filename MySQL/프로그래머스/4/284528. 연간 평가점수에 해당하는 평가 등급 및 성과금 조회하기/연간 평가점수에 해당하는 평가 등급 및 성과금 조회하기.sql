select e.emp_no, e.emp_name, 
    case
        when g.avg_score >= 96 then 'S'
        when g.avg_score >= 90 then 'A'
        when g.avg_score >= 80 then 'B'
        else 'C'
    end as grade,
        case
        when g.avg_score >= 96 then e.sal*(20.0/100)
        when g.avg_score >= 90 then e.sal*(15.0/100)
        when g.avg_score >= 80 then e.sal*(10.0/100)
        else 0
    end as bonus
from hr_employees e
join (
    select emp_no, avg(score) as avg_score
    from hr_grade
    group by emp_no
) g on e.emp_no = g.emp_no
order by e.emp_no