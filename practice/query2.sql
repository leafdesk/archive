-- ALTER TABLE covid.variants DROP COLUMN id;
-- ALTER TABLE covid.variants DROP COLUMN `description`;

DESC 
	covid.variants;

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
	covid.variants;

-- location, variant 열 선택, covid.variants에서, 10줄로 제한
SELECT
	location, variant
FROM 
	covid.variants LIMIT 10
;