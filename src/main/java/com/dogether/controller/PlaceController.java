package com.dogether.controller;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dogether.domain.FavoritePlace;
import com.dogether.domain.Place;
import com.dogether.domain.Review;
import com.dogether.service.PlaceService;
import com.dogether.service.ReviewService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/place")
public class PlaceController {

    private final PlaceService placeService;
    private final ReviewService reviewService;

    // 완성
    @GetMapping("/list")
    public List<Place> getPlaceList(String place_category, Model model) {
        List<Place> places = placeService.list(place_category);
        // model.addAttribute("places", places);

        // 테스트용 조건문
        if (!places.isEmpty()) {
            for (Place place : places) {
                System.out.println(place.getPlace_name());
            }
        } else {
            System.out.println("place is null");
        }
        return places;
    }

    // 완성
    @GetMapping("/detail")
    public Place getPlaceDetail(int place_id, Model model) {
        Place place = placeService.detail(place_id);
        System.out.println(place.getPlace_id());
        List<Review> reviews = reviewService.list(place_id);
        model.addAttribute("reviews", reviews);
        model.addAttribute("place", place);

        // 테스트용 출력 : place id : place_name 출력. 정상
        System.out.println(place.getPlace_id() + " : " + place.getPlace_name());
        if (!reviews.isEmpty()) {
            for (Review review : reviews) {
                System.out.println(review.getReview_title());
            }
        } else {
            System.out.println("review is null");
        }
        return place;
    }

    @GetMapping("/favorite")
    public List<Place> getFavoritePlaceList(FavoritePlace favoritePlace) {
        List<Place> favoritePlaces = placeService.favoriteList(favoritePlace.getUser_id());
        return favoritePlaces;
    }

}
