package com.dogether.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ImageFile {
	private int file_id;
	private int post_id;
	private String file_oriname;
	private String file_link;
	private Date file_create_date;
}
