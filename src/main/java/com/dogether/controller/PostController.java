package com.dogether.controller;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
	@PostMapping("/post")
	public String setPost(@ModelAttribute Post post) {
		return "post_post";
	}
}
