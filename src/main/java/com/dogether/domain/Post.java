package com.dogether.domain;

import java.util.Date;

import com.dogether.dto.Post2ProcDto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class Post {
	private int post_id;
	private String board_category;
	private String user_id;
	private String user_nickname;
	private String post_title;
	private String post_content;
	private Date post_create_date;
	private Date post_update_date;
	private int post_views;
	
	public Post(Post2ProcDto Post2ProcDto) {
		this.board_category = Post2ProcDto.getBoard_category();
		this.post_title = Post2ProcDto.getPost_title();
		this.post_content = Post2ProcDto.getPost_content();
	}
	
}
