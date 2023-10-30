-- drop database 삭제할 데이터베이스

create database member_management;
use member_management;

-- 대학부 기준
create table members(
	id int auto_increment primary key,
    `name` varchar(20),
    birthdate varchar(20),
    phone_number varchar(20)
);

desc members;