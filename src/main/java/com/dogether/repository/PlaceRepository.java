package com.dogether.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.FavoritePlace;
import com.dogether.domain.Place;
import com.dogether.mapper.FavoritePlaceMapper;
import com.dogether.mapper.PlaceMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PlaceRepository {

    private final PlaceMapper placeMapper;
    private final FavoritePlaceMapper favoritePlaceMapper;

    public List<Place> getDataAll(String place_category) {
        List<Place> list = placeMapper.SelectAll(place_category);
        return list;
    }
    
    public Place selectOne(int place_id) {
        return placeMapper.selectOne(place_id);
    }

    public List<Place> selectFavorite(String user_id) {
        return placeMapper.selectFavorite(user_id);
    }

    public int insertFavorite(FavoritePlace favoritePlace) {
        favoritePlaceMapper.insertFavorite(favoritePlace);
        return 1;
    }
}
