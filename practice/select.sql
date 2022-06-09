-- ALTER TABLE covid.variants DROP COLUMN id;
-- ALTER TABLE covid.variants DROP COLUMN `description`;

DESC
	covid.variants
;

INSERT INTO
	covid.variants
VALUES
	('Angola', '2020-12-21', 'B.1.620', 0, 0, 93)
  , ('Angola', '2020-12-21', 'B.1.620', 0, 0, 93)
;

INSERT INTO 
	covid.variants (location, `date`)
VALUES 
	('Angola', '2020-12-21')
  , ('Angola', '2020-12-21')
;

-- 파일 경로 지정, 필드 구분 단위는 콤마, 컬럼명을 무시하기 위해 첫 번째 행은 건너뜀

LOAD DATA LOCAL INFILE 
	'C:/covid-variants.csv' 
INTO TABLE 
	covid.variants
FIELDS 
	TERMINATED BY ',' IGNORE 1 LINES
;

-- 전체 데이터 조회

SELECT 
	*
FROM 
	covid.variants
;

-- location, variant 열 선택, covid.variants에서, 10줄로 제한

SELECT 
	location
  , variant
FROM 
	covid.variants LIMIT 10
;

-- variant 열의 값이 Alpha이거나, location열의 값이 Angola가 아닌 데이터만 선택

SELECT 
	*
FROM 
	covid.variants
WHERE 
	variant = 'Alpha' OR location != 'Angola'
;

-- variant 열의 데이터를 오름차순으로 정렬

SELECT 
	location
  , variant
FROM
	covid.variants
ORDER BY
	variant LIMIT 10
;

-- ASC 오름차순, DESC 내림차순, 쉼표를 이용해 복합적인 조건 적용 가능
-- location은 오름차순으로 먼저 정렬하고, 그 안에서 variant는 내림차순으로 정렬

SELECT
	location
  , variant
FROM
	covid.variants
ORDER BY
	location ASC
  , variant DESC
;