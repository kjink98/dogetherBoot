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