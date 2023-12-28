package com.dogether.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FavoritePost {
    private int favoritepost_id;
    private String use_id;
    private int post_id;
    private int board_id;
}
