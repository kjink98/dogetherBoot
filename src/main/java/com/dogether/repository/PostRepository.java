package com.dogether.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.Post;
import com.dogether.mapper.PostMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PostRepository {

	private final PostMapper postMapper;
	
	public List<Post> getDataAll(int board_id) {
		List<Post> list = postMapper.selectAll(board_id);
		return list;
	}
	
	public Post getDataOne(Post post) {
		Post detail = postMapper.selectOne(post);
		return detail;
	}
}
