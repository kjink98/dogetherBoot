package com.dogether.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;

import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;

@Mapper
public interface PostMapper {

	@Select("SELECT * FROM tblpost WHERE board_id=#{board_id} order by post_id desc")
	List<Post> selectAll(int board_id);
	
	@Select("SELECT * FROM tblpost WHERE board_id=#{board_id} and post_id=#{post_id}")
	Post selectOne(Post post);
	
	@Select("SELECT * FROM tblfile WHERE post_id=#{post_id}")
	List<ImageFile> selectFile(int post_id);
	
	@SelectKey(before=true, keyProperty="post_id", resultType=int.class, statement= {"SELECT nextval(post_id_seq) FROM DUAL"})
	@Insert("INSERT INTO tblpost(post_id, board_id, user_id, user_nickname, post_title, post_content, post_create_date) "
			+ "VALUES(#{post_id}, #{board_id}, #{user_id}, #{user_nickname}, #{post_title}, #{post_content}, now())")
	void insertOne(Post post);
	
	@Insert("INSERT INTO tblfile(file_id, post_id, file_oriname, file_link, file_create_date) VALUES(nextval(file_id_seq), lastval(post_id_seq), #{file_oriname}, #{file_link}, now())")
	void insertFile(ImageFile imageFile);
}
