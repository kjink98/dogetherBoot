package com.dogether.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.dogether.domain.User;
// mapper는 sql과 메소드를 매핑해서 사용할 수 있게 해주는 것(db랑 연결)
@Mapper
public interface UserMapper {
	// 회원 가입 시 유저 정보 삽입
    @Insert("insert into tbluser (user_id, user_grade, user_name, user_nickname,"
            + "user_pw, user_gender, user_email, user_regdate) "
            + "values(#{user_id}, #{user_grade}, #{user_name}, #{user_nickname},"
            + "#{user_pw}, #{user_gender}, #{user_email}, sysdate)")
    int insertUser(User user);
    
    // 아이디 검색
    @Select("select * from tbluser where user_id = #{user_id}")
    User getById(String user_id);
    
    // 이메일 찾기
    @Select("SELECT * FROM tbluser WHERE user_id = #{user_id}")
    Optional<User> findById(String user_id);

    // 회원 탈퇴
    @Delete("Delete from tbluser where user_id = #{user_id} and user_pw = #{user_pw}")
    int deleteUser(@Param("user_id") String user_id, @Param("user_pw") String user_pw);
    
    // 비밀번호 변경
    @Update("update tbluser set user_pw = #{new_pw} where user_id = #{user_id}")
    void changePassword(@Param("user_id") String user_id, @Param("new_pw") String new_pw);
    
    
}
