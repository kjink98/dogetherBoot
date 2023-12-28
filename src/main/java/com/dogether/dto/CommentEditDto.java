package com.dogether.dto;

import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/* 댓글 수정내역을 받기 위한 Dto*/

@Getter 
@Setter 
@NoArgsConstructor
public class CommentEditDto {
	private int comment_id;
	private String comment_content;
}
