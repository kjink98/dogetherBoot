package com.dogether.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.dogether.domain.Place;

@Mapper
public interface PlaceMapper {

    @Select("select * from tblplace where place_category=#{place_category} order by place_id desc")
    List<Place> SelectAll(String place_category);
    
    @Select("select * from tblplace where place_id=#{place_id}")
    Place selectOne(int place_id);

    @Select("select * from tblfavoriteplace a join tblplace b on a.place_id = b.place_id where a.user_id=#{user_id} order by b.place_id desc")
    List<Place> selectFavorite(String user_id);

}
