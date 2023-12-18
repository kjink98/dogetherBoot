package com.dogether.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.mapper.PostMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PostRepository {

	private final PostMapper postMapper;
	
	public List<Post> getDataAll(int board_id) {
		return postMapper.selectAll(board_id);
	}
	
	public Post getDataOne(Post post) {
		return postMapper.selectOne(post);
	}
	
	public List<ImageFile> getFile(int post_id) {
		return postMapper.selectFile(post_id);
	}
	
	public void setData(Post post) {
		postMapper.insertOne(post);
	}
	
	public void insertFile(ImageFile imageFile) {
		postMapper.insertFile(imageFile);
	}
}
