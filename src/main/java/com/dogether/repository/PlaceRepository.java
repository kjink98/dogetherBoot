package com.dogether.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.FavoritePlace;
import com.dogether.domain.Place;
import com.dogether.dto.PlaceCount;
import com.dogether.mapper.FavoritePlaceMapper;
import com.dogether.mapper.PlaceMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PlaceRepository {

    private final PlaceMapper placeMapper;
    private final FavoritePlaceMapper favoritePlaceMapper;

    public List<Place> getDataAll(String place_category) {
        List<Place> list = placeMapper.selectAll(place_category);
        return list;
    }

    public List<Place> getDataChecked(Place place) {
        List<Place> list = placeMapper.selectChecked(place);
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

    public List<PlaceCount> getCountAll() {
        return placeMapper.countAll();
    }

    public int updateOne(int place_id, float place_score) {
        return placeMapper.updateOne(place_id, place_score);
    }

}
