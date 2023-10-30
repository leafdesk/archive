-- 행 삭제

-- variant가 B.1.160인 행만 삭제함

DELETE FROM 
	covid.variants
WHERE
	variant = 'B.1.160'
;

-- id가 1인 행을 삭제함

DELETE FROM
	covid.variants
WHERE
	id = 1
;

-- [WARNING!!!] 모든 행을 삭제함 (조건 할당이 필요 없음)

DELETE FROM
	covid.variants
;