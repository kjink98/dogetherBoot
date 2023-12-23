import { React, useState } from 'react';
import '../css/PlaceCheckBox.css';

function PlaceCheckBox() {
  const [checkedValues, setValue] = useState([]);
  function handleChange(event) {
    const { value, checked } = event.target

    if (checked) {
      setValue(pre => [...pre, value])
    }

    else {
      setValue(pre => {
        return [...pre.filter(skill => skill !== value)]
      })
    }
  }

  return (
    <div className="checkbox">

      <div classsName="checkboxs comfort">
        <p>편의시설</p>
        <input type="checkbox" value="주차장" onChange={handleChange} />주차장
      </div>

      <br /><div className="checkboxs location">
        <p>위치</p>
        <input type="checkbox" value="실내" onChange={handleChange} />실내
        <input type="checkbox" value="실외" onChange={handleChange} />실외
      </div>

      <br /><div className="checkboxs time">
        <p>영업시간</p>
        <input type="checkbox" value="토요일영업" onChange={handleChange} />토요일 영업
        <input type="checkbox" value="일요일영업" onChange={handleChange} />일요일 영업
      </div>


      <br /><div className="checkboxs ize">
        <p>반려견 사이즈</p>
        <input type="checkbox" value="소형견" onChange={handleChange} />소형견
        <input type="checkbox" value="중형견" onChange={handleChange} />중형견
        <input type="checkbox" value="대형견" onChange={handleChange} />대형견
      </div>
    </div>
  )
}

export default PlaceCheckBox;