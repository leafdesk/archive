-- 데이터를 변경하기 위해서는 안전 모드를 해제해야 함
-- MySQL Workbench > Edit > Preferences... > SQL Editor > Other > Safe Updates 체크 박스 해제

-- MySQL Console에서는 SET SQL_SAFE_UPDATES = 0;

-- 단일 열 수정 : Angola를 Angola2로 수정

UPDATE 
	covid.variants
SET
	location = 'Angola2'
WHERE
	location = 'Angola'
;

-- 다중 열 수정 : 2021-01-01 이전이며 num_sequences가 100 미만인 데이터의 num_sequences, perc_sequences를 0으로 수정

UPDATE
	covid.variants
SET
	num_sequences = 0
  , perc_sequences = 0
WHERE
	`date` < DATE('2021-01-01') AND num_sequences < 100
;

-- id 열 추가 (행 수정 실습을 위해) : INT, [NOT NULL, AUTO_INCREMENT, PRIMARY KEY], FIRST
-- PRIMARY KEY : 중복되지 않는 고유한 값

ALTER TABLE
	covid.variants
ADD
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST
;

-- 특정 행 수정 : id가 1인 행의 num_sequences와 perc_sequences를 99로 수정

UPDATE
	covid.variants
SET
	num_sequences = 99
  , perc_sequences = 99
WHERE
	id = 1
;