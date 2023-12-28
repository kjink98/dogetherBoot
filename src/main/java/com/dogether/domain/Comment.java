package com.dogether.domain;

import java.util.Date;

import com.dogether.dto.CommentEditDto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Comment {
	
	private int comment_id;
	private String user_id;
	private String user_nickname;
	private String board_category;
	private int post_id;
	private String comment_content;
	private Date comment_create_date;
	
	
	@Builder
	public Comment(CommentEditDto commentEditDto) {
		this.comment_id = commentEditDto.getComment_id();
		this.comment_content = commentEditDto.getComment_content();
	}
}
