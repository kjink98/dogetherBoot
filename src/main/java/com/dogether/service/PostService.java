package com.dogether.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dogether.domain.Post;
import com.dogether.repository.PostRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {
	
	private final PostRepository postRepository;
	
	public List<Post> getPostList(int board_id) {
		List<Post> list = postRepository.getDataAll(board_id);
		return list;		
	}
	
	public Post getPostDetail(Post post) {
		Post detail = postRepository.getDataOne(post);
		return detail;
	}
}
