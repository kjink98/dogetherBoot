package com.dogether.controller;

import java.util.List;

import org.springframework.security.core.Authentication;
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

    @GetMapping("/favorite")
    public List<Place> getFavoritePlaceList(Authentication authentication) {
        return placeService.favoriteList(authentication.getName());
    }
    
    @PostMapping("/favorite")
    public boolean postFavoritePlace(@RequestBody FavoritePlace favoritePlace, Authentication authentication) {
        return placeService.setFavoritePlace(favoritePlace, authentication.getName());
    }
    
    @GetMapping("/count")
    public List<PlaceCount> getPlaceCount() {
        return placeService.placeCount();
    }
    
}
