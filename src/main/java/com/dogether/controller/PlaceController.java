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
import com.dogether.dto.PlaceCount;
import com.dogether.service.PlaceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/place")
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("/list/{place_category}")
    public List<Place> getPlaceList(@PathVariable String place_category) {
        List<Place> places = placeService.list(place_category);
        return places;
    }

    @PostMapping("/list")
    public List<Place> getCheckedPlaceList(@RequestBody Place place) {
        List<Place> places = placeService.list(place);
        return places;
    }

    @GetMapping("/detail")
    public Place getPlaceDetail(int place_id, Model model) {
        Place place = placeService.detail(place_id);
        return place;
    }

    @GetMapping("/favorite/{user_id}")
    public List<Place> getFavoritePlaceList(@PathVariable String user_id) {
        List<Place> favoritePlaces = placeService.favoriteList(user_id);
        return favoritePlaces;
    }
    
    @PostMapping("/favorite")
    public String postFavoritePlace(@RequestBody FavoritePlace favoritePlace) {
        placeService.setFavoritePlace(favoritePlace);
        return "favorite";
    }
    
    @GetMapping("/count")
    public List<PlaceCount> getPlaceCount() {
        System.out.println(placeService.placeCount().get(0).getCount());
        return placeService.placeCount();
    }
    
}
