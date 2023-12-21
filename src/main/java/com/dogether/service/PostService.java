package com.dogether.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.repository.PostRepository;
import com.dogether.util.FileUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {
	
	private final PostRepository postRepository;
	
	private final FileUtils fileUtils;
	
	public List<Post> getPostList(int board_id) {
		return postRepository.getDataAll(board_id);	
	}
	
	public Post getPostDetail(Post post) {
		return postRepository.getDataOne(post);
	}
	
	public List<ImageFile> getFile(int post_id) {
		return postRepository.getFile(post_id);
	}
	
	public void setPost (Post post, MultipartFile[] files) {
		post.setUser_id("yooram2");
		post.setUser_nickname("푸들조아");
		postRepository.setData(post);
		
		List<ImageFile> list = fileUtils.insertFileInfo(post, files);
		for (int i=0; i<list.size(); i++) {
			postRepository.insertFile(list.get(i));
		}
	}
	
	public void deletePost(int post_id) {
		// DB 저장 내용 삭제
		postRepository.deletePost(post_id);
		// 실제 파일 삭제
		fileUtils.deleteFile(getFile(post_id));
	}
	
	
	
	
}
