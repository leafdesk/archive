-- covid라는 이름의 데이터베이스 생성
CREATE DATABASE `covid`;

-- 데이터베이스 목록 조회
SHOW DATABASES;

-- covid 데이터베이스의 기본 character-set을 utf8mb4로 변경
ALTER DATABASE `covid`
DEFAULT CHARACTER SET utf8mb4;

-- covid 데이터베이스를 삭제
-- DROP DATABASE `covid`;

-- covid 데이터베이스 안에 variants 테이블 생성
-- 열(column)과 해당 열의 데이터 속성 지정
CREATE TABLE `covid`.`variants`
(
	`location` VARCHAR(26),
    `date` DATE,
    `variant` VARCHAR(26),
    `num_sequences` INT,
    `perc_sequences` INT,
    `num_sequences_total` INT
);

-- 테이블 조회 
DESC `covid`.`variants`;

-- covid 안의 variants 테이블의 이름을 country_variants로 변경
ALTER TABLE `covid`.`variants` RENAME `covid`.`country_variants`;

-- country_variants 테이블에 '국가별 감염자 수'라는 주석을 닮
ALTER TABLE `covid`.`country_variants` COMMENT='국가별 감염자 수';

-- covid 안의 variants 테이블에 id 열을 추가 (INT 속성)
ALTER TABLE `covid`.`variants` ADD `id` INT;

-- FIRST 옵션 : 테이블 가장 앞 쪽에 열을 생성
ALTER TABLE `covid`.`variants` ADD `id` INT FIRST;

-- AFTER 옵션 : `date` 뒷 쪽에 열을 생성
ALTER TABLE `covid`.`variants` ADD `id` INT AFTER `date`;

-- NULL 옵션 : Null 값을 갖는 데이터를 추가할 수 있음
ALTER TABLE `covid`.`variants` ADD `id` INT NULL;

-- NOT NULL 옵션 : Null 값을 갖는 데이터를 추가할 수 없음
ALTER TABLE `covid`.`variants` ADD `id` INT NOT NULL;

-- AUTO_INCREMENT 옵션 : 해당 열에 데이터를 입력하지 않아도 값이 할당 됨
-- PRIMARY KEY 옵션 : 해당 키를 기본 키로 설정, 기본 키는 식별자로 주로 활용
ALTER TABLE `covid`.`variants` ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

-- DEFAULT 옵션 : 데이터가 추가될 때 갖게 되는 기본 값을 설정
ALTER TABLE `covid`.`variants` ADD `description` VARCHAR(26) DEFAULT "-Description-";

-- covid 데이터베이스 안의 variants 테이블에서, description 열의 이름을 desc로 변경 (VARCHAR 속성)
ALTER TABLE `covid`.`variants` CHANGE `description` `desc` VARCHAR(30);
ALTER TABLE `covid`.`variants` CHANGE `desc` `description` INT;

-- MODIFY는 열의 '속성'만 변경 가능, (CHANGE는 이름까지 변경 가능)
ALTER TABLE `covid`.`variants` MODIFY `description` VARCHAR(25);

-- 쉼표(,)를 이용하여 여러 개 수정 가능
ALTER TABLE `covid`.`variants`
MODIFY `description` VARCHAR(26),
MODIFY `num_sequences` DOUBLE;

-- 이미 존재하는 열에 옵션 부여 가능 : id 열에 속성 부여
ALTER TABLE `covid`.`variants` MODIFY COLUMN `id` INT FIRST;
ALTER TABLE `covid`.`variants` MODIFY COLUMN `id` INT NOT NULL;

-- 기본값 할당 시에는 ALTER COLUMN을 활용하여 기본값 설정
ALTER TABLE `covid`.`variants` ALTER COLUMN `description` SET DEFAULT 'default';

ALTER TABLE `covid`.`variants` ADD `test` INT;
-- 열 삭제 : 해당 열의 모든 데이터도 삭제됨
ALTER TABLE `covid`.`variants` DROP COLUMN `test`;

-- 테이블 삭제 : 해당 테이블의 모든 데이터가 삭제됨
-- DROP TABLE `covid`.`variants`;

-- DESC `covid`.`variants`;