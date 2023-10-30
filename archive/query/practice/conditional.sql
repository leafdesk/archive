SELECT
	*
FROM
	covid.variants
WHERE
	num_sequences != 0 AND (location = 'Angola' OR location = 'Argentina')
;

SELECT
	*
FROM
	covid.variants
WHERE
	`date` BETWEEN DATE('2020-05-10') AND DATE('2020-05-11')
;

-- IN ('Angola', 'Argentina') === 'Angola' OR 'Argentina'

SELECT
	*
FROM
	covid.variants
WHERE
	location IN ('Angola', 'Argentina')
;

SELECT 
    *
FROM
    covid.variants
WHERE
    location IS NOT NULL AND variant IS NULL
;

-- 패턴 연산자 : 언더바는 한 글자만 허용, %는 한 글자 이상

SELECT
	*
FROM
	covid.variants
WHERE
	location LIKE '_n%'
;