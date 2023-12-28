package com.dogether.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.dto.PostListDto;
import com.dogether.service.PostService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/post")
public class PostController {

	private final PostService postService;

	@GetMapping("/list")
	public List<PostListDto> getPostList(int board_id) {
		return postService.getPostList(board_id);
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

	@PostMapping(path = "/post", consumes = { "multipart/form-data" })
	public String setPost(@RequestPart Post post, @RequestPart(value = "files", required = false) MultipartFile[] files) {
		postService.setPost(post, files);
		return "post_post";
	}

	@GetMapping("/delete")
	public String deletePost(int post_id) {
		postService.deletePost(post_id);
		return "delete";
	}

	@GetMapping("/favorite/{user_id}")
	public List<Post> getFavoritePostList(@PathVariable String user_id) {
		List<Post> favoritePosts = postService.favoriteList(user_id);
		/*
		 * Test
		 * System.out.println(user_id);
		 * for (Post post : favoritePosts) {
		 * System.out.println("post_id : " + post.getPost_id());
		 * }
		 */
		return favoritePosts;
	}

	@GetMapping("/myhistory/{user_id}")
	public List<Post> getMyPostList(@PathVariable String user_id) {
		List<Post> myPosts = postService.myList(user_id);
		/*
		 * Test
		 * System.out.println(user_id);
		 * for (Post post : favoritePosts) {
		 * System.out.println("post_id : " + post.getPost_id());
		 * }
		 */
		return myPosts;
	}

}
