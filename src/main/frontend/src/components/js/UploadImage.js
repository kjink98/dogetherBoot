import React, { useEffect, useState } from "react";
import '../css/UploadImage.css'

const UploadImage = (props) => {
	const [selectedImages, setSelectedImages] = useState([]);
	
	useEffect(()=>{
		const setImages = (selectedImages) => {
			props.setImages(selectedImages);
		}
		setImages(selectedImages);
	}, [selectedImages]);
	
console.log(selectedImages)
	const onSelectFile = (event) => {
		console.log(event.target.files);
		const selectedFiles = event.target.files;
		const selectedFilesArray = Array.from(selectedFiles);

		const imagesArray = selectedFilesArray.map((file) => {
			return URL.createObjectURL(file);
		});

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
				<input type="file" name="images" onChange={onSelectFile} multipleaccept="image/*" multiple="multiple"/>
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