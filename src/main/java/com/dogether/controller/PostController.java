package com.dogether.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.service.PostService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/post")
public class PostController {

	private final PostService postService;
	
	@GetMapping("/list")
	public List<Post> getPostList(int board_id) {
		List<Post> list = postService.getPostList(board_id);
		return list;
	}
	
	@GetMapping("/detail")
	public Map<String, Object> getPostDetail(Post post) {
		Post detail = postService.getPostDetail(post);
		List<ImageFile> fileList = postService.getFile(post.getPost_id());
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("detail", detail);
		map.put("files", fileList);
		return map;
	}
	
	@PostMapping(path="/post", consumes= {"multipart/form-data"})
	public String setPost(@RequestPart Post post, @RequestPart(value="files", required=false) MultipartFile[] files) {
		postService.setPost(post, files);
		return "post_post";
	}
}
