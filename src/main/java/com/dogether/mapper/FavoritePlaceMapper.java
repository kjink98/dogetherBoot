package com.dogether.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import com.dogether.domain.FavoritePlace;

@Mapper
public interface FavoritePlaceMapper {
  
    @Insert("INSERT INTO tblfavoriteplace(favoriteplace_id, user_id, place_id) VALUES(nextval(favoriteplace_id_seq), #{user_id}, #{place_id})")
    void insertFavorite(FavoritePlace favoritePlace);
}
