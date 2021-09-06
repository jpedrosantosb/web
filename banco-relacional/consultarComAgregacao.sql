-- soma por regioes

select regiao as 'Região', sum(populacao) as Total from estados group by regiao order by Total desc 

-- média aritmética

select avg(populacao) as Total from estados