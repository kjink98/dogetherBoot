package com.dogether.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.mybatis.spring.MyBatisSystemException;

import com.dogether.domain.User;

@Mapper
/**
 * 사용자 정보에 관한 데이터베이스 연산을 정의한 매퍼 인터페이스
 */
public interface UserMapper {
	
	/**
     * 새로운 사용자 정보를 데이터베이스에 삽입하는 메소드
     * 생일 미완
     */
    @Insert("insert into tbluser (user_id, role, user_name, user_nickname,"
            + "user_pw, user_gender, user_email, user_regdate) "
            + "values(#{user_id}, 'USER',  #{user_name}, #{user_nickname},"
            + "#{user_pw}, #{user_gender}, #{user_email}, sysdate)")
    int insertUser(User user);
    
    @Insert({
        "MERGE INTO tbluser u",
        "USING (SELECT #{user_id} as tmpId FROM dual) tmp",
        "ON (u.user_id = tmp.tmpId)",
        "WHEN MATCHED THEN",
        "    UPDATE SET u.user_name = #{user_name}, u.user_nickname = #{user_nickname},",
        "        u.user_pw = #{user_pw}, u.user_gender = #{user_gender}, u.user_email = #{user_email}, u.user_regdate = sysdate",
        "WHEN NOT MATCHED THEN",
        "    INSERT (u.user_id, u.role, u.user_name, u.user_nickname, u.user_pw, u.user_gender, u.user_email, u.user_regdate)",
        "    VALUES (#{user_id}, 'USER',  #{user_name}, #{user_nickname}, #{user_pw}, #{user_gender}, #{user_email}, sysdate)"
    })
    int saveOrUpdate(User user);
     /**
     * 사용자 아이디를 통해 사용자 정보를 찾는 메소드입니다.
     * 검색된 사용자 정보를 Optional<User>로 반환합니다.
     * Optional을 사용하는 이유는 해당 아이디의 사용자가 없는 경우에도 안전하게 처리하기 위함입니다.
     * 아이디에 해당하는 사용자가 없으면 Optional.empty를 반환합니다.
     */
    @Select("SELECT * FROM tbluser WHERE user_id = #{user_id}")
    Optional<User> findById(String user_id);
    
    /**
    * 사용자 이메일을 통해 사용자 정보를 찾는 메소드
    */
    @Select("SELECT * FROM tbluser WHERE user_email = #{user_email}")
    Optional<User> findByEmail(String user_email);
    
    /**
     * 사용자 아이디를 통해 비밀번호를 변경하는 메소드입니다.
     */
    @Update("update tbluser set user_pw = #{newPassword} where user_id = #{user_id}")
    void updateUserPassword(@Param("user_id") String email, @Param("newPassword") String newPassword);
    
    /**
     * 사용자 아이디와 비밀번호를 통해 사용자 정보를 삭제하는 메소드
     */
    @Delete("Delete from tbluser where user_id = #{user_id}")
    int resignUser(@Param("user_id") String user_id);
	}


