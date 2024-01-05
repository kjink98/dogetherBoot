package com.dogether.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Place {
    private int place_id;
    private String place_category;
    private String place_address;
    private String place_name;
    private String place_homepage;
    private String place_time;
    private String place_call;
    private int place_likes;
    private float place_score;
    private boolean place_parking;
    private byte place_inout;
    private byte place_weekend;
    private byte place_dogsize;

}
