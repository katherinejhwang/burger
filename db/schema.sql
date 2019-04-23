-- Insert below which runs the program but double-checks to make sure there is error
DROP DATABASE IF EXISTS burgers_db;

-- Creates Database --
CREATE Database burgers_db;

-- Use Database --
USE burgers_db;

-- Create Tables --
CREATE TABLE burgers(
	id integer(30) AUTO_INCREMENT not null, 
    burger_name varchar(40) not null,
    devoured BOOLEAN,
    primary key (id)
    );
