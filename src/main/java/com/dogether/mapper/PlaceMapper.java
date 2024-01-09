package com.dogether.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.dogether.domain.FavoritePlace;
import com.dogether.domain.Place;
import com.dogether.dto.PlaceCount;

@Mapper
public interface PlaceMapper {

    @Select("select * from tblplace where place_category=#{place_category} order by place_id*1 desc")
    List<Place> selectAll(String place_category);

    @Select("select * from tblplace where place_category=#{place_category} and place_parking=#{place_parking} and (place_inout&#{place_inout})>=#{place_inout} and (place_weekend&#{place_weekend})>=#{place_weekend} and (place_dogsize&#{place_dogsize})>=#{place_dogsize} order by place_id*1 desc")
    List<Place> selectChecked(Place place);

    @Select("select * from tblplace where place_id=#{place_id}")
    Place selectOne(int place_id);

    @Select("select * from tblfavoriteplace a join tblplace b on a.place_id = b.place_id where a.user_id=#{user_id} order by a.favoriteplace_id*1 desc")
    List<Place> selectFavorite(String user_id);

    @Insert("INSERT INTO tblfavoriteplace(favoriteplace_id, user_id, place_id) VALUES(nextval(favoriteplace_id_seq), #{user_id}, #{place_id})")
    void insertFavorite(FavoritePlace favoritePlace);

    @Select("select count(*) from tblfavoriteplace where place_id=#{place_id} and user_id=#{user_id}")
    int selectFavoriteOne(@Param("place_id") int place_id, @Param("user_id") String user_id);

    @Select("select a.po_category as place_category, count(b.place_id) as count from placeorder a inner join tblplace b on a.po_category = b.place_category group by a.po_category order by a.po_id;")
    List<PlaceCount> countAll();

    @Update("update tblplace set place_score=#{place_score} where place_id=#{place_id}")
    int updateOne(@Param("place_id") int place_id, @Param("place_score") float place_score);
}
