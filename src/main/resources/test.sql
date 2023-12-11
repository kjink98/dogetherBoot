CREATE TABLE TBLUSER (
    user_id VARCHAR(255),
    user_grade INT,
    user_name VARCHAR(255),
    user_nickname VARCHAR(255),
    user_pw VARCHAR(255),
    user_gender VARCHAR(255),
    user_email VARCHAR(255),
    user_regdate TIMESTAMP,
    PRIMARY KEY (user_id)
);



select * from tbluser;