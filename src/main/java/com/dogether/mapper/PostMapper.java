package com.dogether.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;
import org.apache.ibatis.annotations.Update;

import com.dogether.domain.Comment;
import com.dogether.domain.FavoritePost;
import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;

@Mapper
public interface PostMapper {

	@Select("SELECT * FROM tblpost WHERE board_category=#{board_category} order by post_id desc LIMIT 5")
	List<Post> selectMainData(String board_category);

	@Select("SELECT * FROM tblpost WHERE board_category=#{board_category} order by post_id desc")
	List<Post> selectAll(String board_category);

	@Select("SELECT * FROM tblfile")
	List<ImageFile> selectFileList(String board_category);

	@Select("SELECT * FROM tblpost WHERE board_category=#{board_category} and post_id=#{post_id}")
	Post selectOne(Post post);

	@Select("SELECT * FROM tblfile WHERE post_id=#{post_id}")
	List<ImageFile> selectFile(int post_id);

	@Update("UPDATE tblpost SET post_views = post_views + 1 WHERE post_id=#{post_id}")
	void updateViews(int post_id);

	@SelectKey(before = true, keyProperty = "post_id", resultType = int.class, statement = {
			"SELECT nextval(post_id_seq) FROM DUAL" })
	@Insert("INSERT INTO tblpost(post_id, board_category, user_id, user_nickname, post_title, post_content, post_create_date) "
			+ "VALUES(#{post_id}, #{board_category}, #{user_id}, #{user_nickname}, #{post_title}, #{post_content}, now())")
	void insertOne(Post post);

	@Insert("INSERT INTO tblfile(file_id, post_id, board_category, file_oriname, file_link, file_create_date) VALUES(nextval(file_id_seq), lastval(post_id_seq), #{board_category}, #{file_oriname}, #{file_link}, now())")
	void insertFile(ImageFile imageFile);

	@Delete("DELETE FROM tblpost WHERE post_id=#{post_id}")
	void deletePost(int post_id);

	@Delete("DELETE FROM tblFile WHERE post_id=#{post_id}")
	void deleteFile(int post_id);

	@Update("UPDATE tblpost SET post_title=#{post_title}, post_content=#{post_content} WHERE post_id=#{post_id}")
	void updatePost(Post post);

	@Insert("INSERT INTO tblfile(file_id, post_id, file_oriname, file_link, file_create_date) VALUES(nextval(file_id_seq), #{post_id}, #{file_oriname}, #{file_link}, now())")
	void updateFile(ImageFile imageFile);

	@Insert("INSERT INTO tblcomment(comment_id, user_id, user_nickname, board_category, post_id, comment_content, comment_create_date) "
			+ "VALUES(nextval(comment_id_seq), #{user_id}, #{user_nickname}, #{board_category}, #{post_id}, #{comment_content}, now())")
	void insertComment(Comment comment);

	@Select("SELECT * FROM tblcomment WHERE post_id=#{post_id}")
	List<Comment> selectComment(int post_id);

	@Delete("DELETE FROM tblcomment WHERE comment_id=#{comment_id}")
	void deleteComment(int comment_id);

	@Delete("DELETE FROM tblcomment WHERE post_id=#{post_id}")
	void deleteCommentAll(int post_id);

	@Update("UPDATE tblcomment SET comment_content=#{comment_content} WHERE comment_id=#{comment_id}")
	void editComment(Comment comment);

	@Select("select * from tblfavoritepost a join tblpost b on a.post_id = b.post_id where a.user_id=#{user_id} order by b.post_id desc")
	List<Post> selectFavorite(String user_id);

	@Insert("INSERT INTO tblfavoritepost(favoritepost_id, user_id, post_id, board_category) VALUES(nextval(favoritepost_id_seq), #{user_id}, #{post_id}, #{board_category})")
	void insertFavorite(FavoritePost favoritePost);

	@Select("select count(*) from tblfavoritepost where post_id=#{post_id} and user_id=#{user_id}")
    int selectFavoriteOne(@Param("post_id") int post_id, @Param("user_id") String user_id);

	@Select("SELECT * FROM tblpost WHERE user_id=#{user_id} ORDER BY post_id desc")
	List<Post> selectMyHistory(String user_id);
}
