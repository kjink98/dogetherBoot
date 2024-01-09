package com.dogether.mapper;

import java.util.List;
import java.util.Optional;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.dogether.domain.User;

@Mapper
/**
 * 사용자 정보에 관한 데이터베이스 연산을 정의한 매퍼 인터페이스 MyBatis의 @Mapper 어노테이션이 붙어 있어 MyBatis가 이
 * 인터페이스를 구현하여 SQL 쿼리를 실행
 */
public interface UserMapper {

    /**
     * 새로운 사용자 정보를 데이터베이스에 삽입하는 메소드 생일 미완
     */
    @Insert("insert into tbluser (user_id, role, user_name, user_nickname,"
            + "user_pw, user_gender, user_email, user_birthday, user_regdate) "
            + "values(#{user_id}, 'USER',  #{user_name}, #{user_nickname},"
            + "#{user_pw}, #{user_gender}, #{user_email}, #{user_birthday}, now())")
    int insertUser(User user);

    /**
     * 사용자 정보를 데이터베이스에 저장하거나 업데이트하는 메소드 이미 사용자 아이디가 데이터베이스에 존재하는 경우, 사용자 정보를 업데이트
     * 사용자 아이디가 데이터베이스에 존재하지 않는 경우, 새로운 사용자 정보를 삽입
     */
    @Insert({
            "INSERT INTO tbluser (user_id, role, user_name, user_nickname, user_pw, user_gender, user_email, user_regdate)",
            "VALUES (#{user_id}, 'USER', #{user_name}, #{user_nickname}, #{user_pw}, #{user_gender}, #{user_email}, now())",
            "ON DUPLICATE KEY UPDATE",
            "user_name = VALUES(user_name), user_nickname = VALUES(user_nickname), user_pw = VALUES(user_pw), "
                    + "user_gender = VALUES(user_gender), user_email = VALUES(user_email), user_regdate = VALUES(user_regdate)" })

    int saveOrUpdate(User user);

    /**
     * 사용자 아이디를 통해 사용자 정보를 찾는 메소드 해당 아이디의 사용자가 없는 경우에도 안전하게 처리하기 위해 Optional<User>를
     * 반환
     */
    @Select("SELECT * FROM tbluser WHERE user_id = #{user_id}")
    Optional<User> findById(String user_id);

    /**
     * 사용자 이메일을 통해 사용자 정보를 찾는 메소드 해당 이메일의 사용자가 없는 경우에도 안전하게 처리하기 위해 Optional<User>를
     * 반환
     */
    @Select("SELECT * FROM tbluser WHERE user_email = #{user_email}")
    Optional<User> findByEmail(String user_email);

    /**
     * 사용자 아이디를 통해 비밀번호를 변경하는 메소드입니다.
     */
    @Update("update tbluser set user_pw = #{newPassword} where user_id = #{user_id}")
    void updateUserPassword(@Param("user_id") String email, @Param("newPassword") String newPassword);

    /**
     * 사용자 아이디를 통해 내정보를 변경하는 메소드입니다.
     */
    @Update("update tbluser set user_nickname = #{newNickname} where user_id = #{user_id}")
    void updateInfo(@Param("user_id") String email, @Param("newNickname") String newNickname);

    /**
     * 사용자 권한 업데이트하는 메소드입니다.
     */
    @Update({
            "UPDATE tbluser ",
            "SET role = CASE ",
            "WHEN #{role} = 'ROLE_USER' THEN 'USER'",
            "WHEN #{role} = 'ROLE_SELLER' THEN 'SELLER'",
            "WHEN #{role} = 'ROLE_ADMIN' THEN 'ADMIN'",
            "ELSE role END ",
            "WHERE user_id = #{user_id}"
    })
    void updateRoles(@Param("user_id") String user_id, @Param("role") String role);

    /**
     * 사용자 아이디와 비밀번호를 통해 사용자 정보를 삭제하는 메소드
     */
    @Update("update tbluser set user_del=true where user_id = #{user_id}")
    int resignUser(@Param("user_id") String user_id);

    @Select("SELECT * FROM tbluser")
    List<User> findAllUsers();

    /*
     * 회원가입 시 아이디 중복확인
     */
    @Select("SELECT COUNT(*) FROM tbluser WHERE user_id=#{user_id}")
    boolean idCheck(String user_id);

    /*
     * 회원가입 시 닉네임 중복확인
     */
    @Select("SELECT COUNT(*) FROM tbluser WHERE user_nickname=#{user_nickname}")
    boolean nicknameCheck(String user_nickname);
}
