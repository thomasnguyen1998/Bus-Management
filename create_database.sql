drop database myDB;
create database myDB;
use myDB;

create table customer(
	ID int not null auto_increment,
    USER_NAME varchar(255) not null,
    RFID varchar(20) not null,
    MONEY int,
    primary key(ID),
    unique (RFID));