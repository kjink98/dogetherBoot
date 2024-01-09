import { React, useState, useEffect } from 'react';
import '../css/PlaceCheckBox.css';
import axios from 'axios';

function PlaceCheckBox({ setPlaceList, place_category }) {
  const [checkedValues, setCheckedValues] = useState({
    place_parking: false,
    place_inout: 0,
    place_weekend: 0,
    place_dogsize: 0
  });
  function handleChange(event) {
    const { value, checked } = event.target

    if (value === "주차장") {
      if (checked) {
        setCheckedValues({ ...checkedValues, place_parking: !checkedValues.place_parking.valueOf() });
      } else {
        setCheckedValues({ ...checkedValues, place_parking: !checkedValues.place_parking.valueOf() });
      }
    } else if (value === "실내") {
      if (checked) {
        setCheckedValues({ ...checkedValues, place_inout: checkedValues.place_inout.valueOf() + 2 });
      } else {
        setCheckedValues({ ...checkedValues, place_inout: checkedValues.place_inout.valueOf() - 2 });
      }
    } else if (value === "실외") {
      if (checked) {
        setCheckedValues({ ...checkedValues, place_inout: checkedValues.place_inout.valueOf() + 1 });
      } else {
        setCheckedValues({ ...checkedValues, place_inout: checkedValues.place_inout.valueOf() - 1 });
      }
    } else if (value === "토요일영업") {
      if (checked) {
        setCheckedValues({ ...checkedValues, place_weekend: checkedValues.place_weekend.valueOf() + 2 });
      } else {
        setCheckedValues({ ...checkedValues, place_weekend: checkedValues.place_weekend.valueOf() - 2 });
      }
    } else if (value === "일요일영업") {
      if (checked) {
        setCheckedValues({ ...checkedValues, place_weekend: checkedValues.place_weekend.valueOf() + 1 });
      } else {
        setCheckedValues({ ...checkedValues, place_weekend: checkedValues.place_weekend.valueOf() - 1 });
      }
    } else if (value === "소형견") {
      if (checked) {
        setCheckedValues({ ...checkedValues, place_dogsize: checkedValues.place_dogsize.valueOf() + 4 });
      } else {
        setCheckedValues({ ...checkedValues, place_dogsize: checkedValues.place_dogsize.valueOf() - 4 });
      }
    } else if (value === "중형견") {
      if (checked) {
        setCheckedValues({ ...checkedValues, place_dogsize: checkedValues.place_dogsize.valueOf() + 2 });
      } else {
        setCheckedValues({ ...checkedValues, place_dogsize: checkedValues.place_dogsize.valueOf() - 2 });
      }
    } else if (value === "대형견") {
      if (checked) {
        setCheckedValues({ ...checkedValues, place_dogsize: checkedValues.place_dogsize.valueOf() + 1 });
      } else {
        setCheckedValues({ ...checkedValues, place_dogsize: checkedValues.place_dogsize.valueOf() - 1 });
      }
    }
  }

  useEffect(() => {
    const getPlaceList = async () => {
      let params = {
        ...checkedValues,
        place_category: place_category
      }
      const resp = await axios.post(`/dog/place/list`, params)
      setPlaceList(resp.data);
    }
    getPlaceList();
  }, [checkedValues]);

  {/* let data = ['최신순', '별점높은순', '별점낮은순'];
	let [btnActive, setBtnActive] = useState("");

	const toggleActive = (e) => {
		setBtnActive((prev) => {
			console.log(e.target.value);
			return e.target.value;
		});
	}; */}

  return (
    <div className="checkbox">
      {/* <div className="CheckboxButton">
				<p>검색기준을 설정해주세요&nbsp;&nbsp;&nbsp;</p>
				{data.map((item, idx) => {
					return (
						<>
							<p>|</p>
							<button value={idx} className={"checkbutton btn" + (idx == btnActive ? " active" : "")} onClick={toggleActive}>{item}</button>
						</>
					);
				})}
			</div> */}

      <div classsName="checkboxs comfort">
        <p className="checkboxoption">편의시설</p>
        <input type="checkbox" value="주차장" onChange={handleChange} />주차장
      </div>

      <br /><div className="checkboxs location">
        <p className="checkboxoption">위치</p>
        <input type="checkbox" value="실내" onChange={handleChange} />실내
        <input type="checkbox" value="실외" onChange={handleChange} />실외
      </div>

      <br /><div className="checkboxs time">
        <p className="checkboxoption">영업시간</p>
        <input type="checkbox" value="토요일영업" onChange={handleChange} />토요일 영업
        <input type="checkbox" value="일요일영업" onChange={handleChange} />일요일 영업
      </div>


      <br /><div className="checkboxs size">
        <p className="checkboxoption">반려견 사이즈</p>
        <input type="checkbox" value="소형견" onChange={handleChange} />소형견
        <input type="checkbox" value="중형견" onChange={handleChange} />중형견
        <input type="checkbox" value="대형견" onChange={handleChange} />대형견
      </div>
    </div>
  )
}

export default PlaceCheckBox;