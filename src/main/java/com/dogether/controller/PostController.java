package com.dogether.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.Comment;
import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.dto.CommentEditDto;
import com.dogether.dto.PostListDto;
import com.dogether.service.PostService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/post")
public class PostController {

	private final PostService postService;
	
	@GetMapping("/list/{board_category}")
	public List<PostListDto> getPostList(@PathVariable String board_category) {
		return postService.getPostList(board_category);
	}
	
	@GetMapping("/detail/{board_category}/{post_id}")
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
	
	@DeleteMapping("/delete/{post_id}")
	public String deletePost(@PathVariable int post_id) {		
		postService.deletePost(post_id);
		return "delete";
	}
	
	@PutMapping(path = "/update", consumes = { "multipart/form-data" })
	public String updatePost(@RequestPart Post post, @RequestPart(value = "files", required = false) MultipartFile[] files) {
		postService.updatePost(post, files);
		return "update";
	}
	
	@PostMapping("/comment")
	public String setComment(@RequestBody Comment comment) {
		postService.setComment(comment);
		return "comment";
	}
	
	@GetMapping("/commentList/{post_id}")
	public List<Comment> getComment(@PathVariable int post_id) {
		return postService.getComment(post_id);
	}
	
	@DeleteMapping("/commentDelete/{comment_id}")
	public String deleteComment(@PathVariable int comment_id) {
		postService.deleteComment(comment_id);
		return "delete";
	}
	
	@PutMapping("/commentEdit")
	public String editComment(@RequestBody CommentEditDto commentEditDto) {
		postService.editComment(commentEditDto);
		return "edit";
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
