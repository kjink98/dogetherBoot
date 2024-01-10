package com.dogether.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.FavoritePlace;
import com.dogether.domain.Place;
import com.dogether.dto.PlaceCount;
import com.dogether.mapper.PlaceMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PlaceRepository {

    private final PlaceMapper placeMapper;

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

    public void insertFavorite(FavoritePlace favoritePlace) {
        placeMapper.insertFavorite(favoritePlace);
    }

    public int selectFavoriteOne(int place_id, String user_id) {
        return placeMapper.selectFavoriteOne(place_id, user_id);
    }

    public List<PlaceCount> getCountAll() {
        return placeMapper.countAll();
    }

    public int updateOne(int place_id, float place_score) {
        return placeMapper.updateOne(place_id, place_score);
    }

}
