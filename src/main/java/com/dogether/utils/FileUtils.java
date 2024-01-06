package com.dogether.utils;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;

@Component("fileUtils")
public class FileUtils {

	/* 파일 저장 */
	public List<ImageFile> insertFileInfo(String board_category, MultipartFile[] files) {

		List<ImageFile> imageFileList = new ArrayList<>();

		if (files != null) {
			for (MultipartFile file : files) {

				// 이미지가 존재하지 않을 때
				if (file.isEmpty()) {
					continue;
				}

				// 이미지 저장 경로
				String rootFolder = new File("").getAbsolutePath() + "/src/main/frontend/public/img/";
				// 날짜별 폴더 생성
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
				String today = sdf.format(new Date());
				File targetFolder = new File(rootFolder + today);

				if (!targetFolder.exists())
					targetFolder.mkdirs();

				// 저장 파일명 만들기(중복방지)
				String fileName = UUID.randomUUID().toString();
				fileName += "_" + System.currentTimeMillis();
				String originalFileName = file.getOriginalFilename();
				String ext = originalFileName.substring(originalFileName.lastIndexOf("."));
				String saveFileName = rootFolder + today + "/" + fileName + ext;

				// 파일 저장
				try {
					file.transferTo(new File(saveFileName));
				} catch (Exception e) {
					System.out.println("insertFileInfo: " + e);
				}

				// 파일 정보 DB 저장
				saveFileName = today + "/" + fileName + ext;
				ImageFile imagefile = new ImageFile();
				imagefile.setBoard_category(board_category);
				imagefile.setFile_oriname(originalFileName);
				imagefile.setFile_link(saveFileName);

				imageFileList.add(imagefile);
			}
		}
		return imageFileList;
	}

	/* 파일 삭제 */
	public void deleteFile(List<ImageFile> fileList) {

		String rootFolder = new File("").getAbsolutePath() + "/src/main/frontend/public/img/";

		try {
			for (int i = 0; i < fileList.size(); i++) {
				File file = new File(rootFolder + fileList.get(i).getFile_link());
				file.delete();
			}
		} catch (Exception e) {
			System.out.println("deleteFile: " + e);
		}
	}
	
	// 파일 1개만 등록
	public ImageFile insertFileOne(String board_category, MultipartFile file) {
		
		// 이미지 저장 경로
		String rootFolder = new File("").getAbsolutePath() + "/src/main/frontend/public/img/";
		// 날짜별 폴더 생성
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
		String today = sdf.format(new Date());
		File targetFolder = new File(rootFolder + today);

		if (!targetFolder.exists())
			targetFolder.mkdirs();

		// 저장 파일명 만들기(중복방지)
		String fileName = UUID.randomUUID().toString();
		fileName += "_" + System.currentTimeMillis();
		String originalFileName = file.getOriginalFilename();
		String ext = originalFileName.substring(originalFileName.lastIndexOf("."));
		String saveFileName = rootFolder + today + "/" + fileName + ext;

		// 파일 저장
		try {
			file.transferTo(new File(saveFileName));
		} catch (Exception e) {
			System.out.println("insertFileInfo: " + e);
		}

		// 파일 정보 DB 저장
		saveFileName = today + "/" + fileName + ext;
		ImageFile imagefile = new ImageFile();
		imagefile.setBoard_category(board_category);
		imagefile.setFile_oriname(originalFileName);
		imagefile.setFile_link(saveFileName);
		
		return imagefile;
	}
}
