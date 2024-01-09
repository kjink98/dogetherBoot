package com.dogether.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FavoritePost {
    private int favoritepost_id;
    private String user_id;
    private int post_id;
    private String board_category;
}
