package com.dogether.dto;

import java.util.Date;

import com.dogether.domain.Post;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/* 게시판 리스트 게시글 + 썸네일 이미지를 보여주기 위한 DTO */

@Getter 
@Setter 
@NoArgsConstructor
public class PostListDto {

	private int post_id;
	private String board_category;
	private String user_id;
	private String user_nickname;
	private String post_title;
	private String post_content;
	private Date post_create_date;
	private int post_views;
	private int file_id;
	private String file_link;
	private int post_comment;
	
	@Builder
	public PostListDto(Post post) {
		this.post_id = post.getPost_id();
		this.board_category = post.getBoard_category();
		this.user_id = post.getUser_id();
		this.user_nickname = post.getUser_nickname();
		this.post_title = post.getPost_title();
		this.post_content = post.getPost_content();
		this.post_create_date = post.getPost_create_date();
		this.post_views = post.getPost_views();
	}
}
