package com.dogether.controller;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.Post;
import com.dogether.service.PostService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/post")
public class PostController {

	private final PostService postService;
	
	@GetMapping("/list")
	public List<Post> getPostList(int board_id, Model model) {
		List<Post> list = postService.getPostList(board_id);
		model.addAttribute("list", list);
		return list;
	}
	
	@GetMapping("/detail")
	public Post getPostDetail(Post post) {
		Post detail = postService.getPostDetail(post);
		return detail;
	}
	
	@PostMapping("/post")
	public String setPost(@RequestParam("post") Post post, @RequestParam("file") MultipartFile[] postFiles) {
		System.out.println(post.getBoard_id());
		System.out.println(postFiles[0]);
		//postService.setPost(post);
		return "post_post";
	}
}
