# 부모의 형질을 모두 보유한 대장균

select a.id, a.genotype, b.genotype as parent_genotype
from ecoli_data a
    join ecoli_data b
    on a.parent_id = b.id
where (a.genotype & b.genotype) = b.genotype
order by a.id
