package com.dogether.dto;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/* 뉴스게시판 글쓰기용 DTO */

@Getter 
@Setter 
@NoArgsConstructor
public class Post2ProcDto {

	private String board_category;
	private String user_id;
	private String user_nickname;
	private String post_title;
	private String post_content;
	private String[] lastUrlList;
	private String[] deleteUrlList;
	
}
