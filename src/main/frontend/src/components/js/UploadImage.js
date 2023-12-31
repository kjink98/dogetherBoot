import React, { useEffect, useState } from "react";
import '../css/UploadImage.css'

const UploadImage = (props) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [sendImages, setSendImages] = useState([]);

  useEffect(() => {
    const setImages = (sendImages) => {
      props.setImages(sendImages);
    }
    setImages(sendImages);
  }, [sendImages]);



  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles); //object 형태로 만들어줌

    setSendImages(sendImages.concat(selectedFilesArray));

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    }); // image 보여주기용 url blob

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section className="ImageSection">
      <label className="ImageLabel">
        <p>+ 사진 추가</p>
        <span className="ImageSpan">사진 추가는 최대 20장까지 가능합니다.</span>
        <input type="file" name="images" onChange={onSelectFile} multipleaccept="image/*" multiple="multiple" />
      </label>
      <br />

      <input type="file" multiple />

      <div className="images">
        {selectedImages.length > 20 ? (
          alert('첨부 가능한 최대 이미지 수를 초과하였습니다.'),
          <p>{selectedImages.length - 20} 장의 이미지를 지워주세요</p>
        ) : ''}

        {selectedImages && selectedImages.map((image) => {
          return (
            <div key={image} className="image">
              <img src={image} alt="upload" />
              <button onClick={() => deleteHandler(image)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UploadImage;