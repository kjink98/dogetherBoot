package com.dogether.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.Comment;
import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.mapper.PostMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PostRepository {

	private final PostMapper postMapper;
	
	// 전체 게시글 내용 목록 가져오기
	public List<Post> getDataAll(String board_category) {
		return postMapper.selectAll(board_category);
	}
	
	// 1개 게시글 내용 가져오기
	public Post getDataOne(Post post) {
		return postMapper.selectOne(post);
	}
	
	// 1개 게시글 이미지 목록 가져오기
	public List<ImageFile> getFile(int post_id) {
		return postMapper.selectFile(post_id);
	}
	
	// 게시글 등록
	public void setData(Post post) {
		postMapper.insertOne(post);
	}
	
	// 이미지 등록
	public void insertFile(ImageFile imageFile) {
		postMapper.insertFile(imageFile);
	}
	
	// 게시글, 이미지 삭제
	public void deletePost(int post_id) {
		postMapper.deletePost(post_id);
		postMapper.deleteFile(post_id);
	}
	
	// 댓글 등록
	public void setComment(Comment comment) {
		postMapper.insertComment(comment);
	}
	
	// 댓글 리스트
	public List<Comment> getComment(int post_id) {
		return postMapper.selectComment(post_id);
	}
	
	// 댓글 삭제
	public void deleteComment(int comment_id) {
		postMapper.deleteComment(comment_id);
	}
}
