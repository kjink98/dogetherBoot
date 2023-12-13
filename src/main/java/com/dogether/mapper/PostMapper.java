package com.dogether.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.dogether.domain.Post;

@Mapper
public interface PostMapper {

	@Select("SELECT * FROM tblpost WHERE board_id=#{board_id} order by post_id desc")
	List<Post> selectAll(int board_id);
	
	@Select("SELECT * FROM tblpost WHERE board_id=#{board_id} and post_id=#{post_id}")
	Post selectOne(Post post);
}
