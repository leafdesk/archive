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