package com.dogether.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Comment {
	
	private int comment_id;
	private String user_id;
	private String user_nickname;
	private int board_id;
	private int post_id;
	private String comment_content;
	private Date comment_create_date;
}
