package com.dogether.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    private int review_id;
    private String user_id;
    private String user_nickname;
    private int place_id;
    private Date review_regdate;
    private String review_content;
    private float review_starRating;
    private String review_image;

}
