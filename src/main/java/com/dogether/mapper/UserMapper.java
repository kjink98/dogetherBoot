package com.dogether.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import com.dogether.domain.User;

@Mapper
public interface UserMapper {
    @Insert("insert into tbluser (user_id, user_grade, user_name, user_nickname,"
            + "user_pw, user_gender, user_email, user_regdate) "
            + "values(#{user_id}, #{user_grade}, #{user_name}, #{user_nickname},"
            + "#{user_pw}, #{user_gender}, #{user_email}, sysdate)")
    int insertUser(User user);
}
