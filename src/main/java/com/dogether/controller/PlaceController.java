package com.dogether.controller;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dogether.domain.FavoritePlace;
import com.dogether.domain.Place;
import com.dogether.service.PlaceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/place")
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("/list")
    public List<Place> getPlaceList(String place_category) {
        List<Place> places = placeService.list(place_category);

        // 테스트용 조건문
        /* if (!places.isEmpty()) {
            for (Place place : places) {
                System.out.println(place.getPlace_name());
            }
        } else {
            System.out.println("place is null");
        } */
        return places;
    }

    @GetMapping("/detail")
    public Place getPlaceDetail(int place_id, Model model) {
        Place place = placeService.detail(place_id);

        // 테스트용 출력 : place id : place_name 출력. 정상
        /* System.out.println(place.getPlace_id() + " : " + place.getPlace_name());
        if (!reviews.isEmpty()) {
            for (Review review : reviews) {
                System.out.println(review.getReview_title());
            }
        } else {
            System.out.println("review is null");
        } */
        return place;
    }

    @GetMapping("/favorite/{user_id}")
    public List<Place> getFavoritePlaceList(@PathVariable String user_id) {
        List<Place> favoritePlaces = placeService.favoriteList(user_id);
        /* Test
        System.out.println(user_id);
        for (Place place : favoritePlaces) {
            System.out.println("place_id : " + place.getPlace_id());
        } */
        return favoritePlaces;
    }
    
    @PostMapping("/favorite")
    public String postFavoritePlace(@RequestBody FavoritePlace favoritePlace) {
        placeService.setFavoritePlace(favoritePlace);
        return "favorite";
    }
    
}
