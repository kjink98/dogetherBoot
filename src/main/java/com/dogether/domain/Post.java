package com.dogether.domain;

import java.util.Date;

import lombok.Data;

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
	
	
}
