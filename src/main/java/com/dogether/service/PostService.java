package com.dogether.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.Comment;
import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.dto.CommentEditDto;
import com.dogether.dto.PostListDto;
import com.dogether.repository.PostRepository;
import com.dogether.util.FileUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {

	private final PostRepository postRepository;

	private final FileUtils fileUtils;
	
	// 전체 게시글 목록 가져오기
	public List<PostListDto> getPostList(String board_category) {
		List<PostListDto> list = new ArrayList<>();

		// 게시글 내용, 썸네일 담기
		 List<Post> postList = postRepository.getDataAll(board_category);	

		for (int i = 0; i < postList.size(); i++) {
			PostListDto listDto = new PostListDto(postList.get(i));
			List<ImageFile> fileList = getFile(postList.get(i).getPost_id());
			for (int j = 0; j < fileList.size(); j++) {
				if (fileList.get(j).getPost_id() == postList.get(i).getPost_id()) {
					listDto.setFile_id(fileList.get(j).getFile_id());
					listDto.setFile_link(fileList.get(j).getFile_link());
					break;
				}
			}
			list.add(listDto);
		}
		return list;
	}
	
	// 1개 게시글 내용 가져오기
	public Post getPostDetail(Post post) {
		return postRepository.getDataOne(post);
	}
	
	// 1개 게시글 이미지 목록 가져오기
	public List<ImageFile> getFile(int post_id) {
		return postRepository.getFile(post_id);
	}
	
	// 게시글 등록
	public void setPost (Post post, MultipartFile[] files) {
		post.setUser_id("yooram2"); // 임시 저장
		post.setUser_nickname("푸들조아"); // 임시 저장
		postRepository.setData(post);

		List<ImageFile> list = fileUtils.insertFileInfo(files);
		for (int i = 0; i < list.size(); i++) {
			postRepository.insertFile(list.get(i));
		}
	}
	
	// 게시글 삭제
	public void deletePost(int post_id) {
		// 게시글 DB 삭제
		postRepository.deletePost(post_id);
		// 이미지 DB 삭제
		postRepository.deleteFile(post_id);
		// 이미지 실제 파일 삭제
		fileUtils.deleteFile(getFile(post_id));
	}
	
	// 게시글 수정
	public void updatePost(Post post, MultipartFile[] files) {
		// 게시글 DB 수정
		postRepository.updatePost(post);
		// 기존 이미지 DB, 실제 파일 삭제
		postRepository.deleteFile(post.getPost_id());
		fileUtils.deleteFile(getFile(post.getPost_id()));
		// 새 이미지 등록
		List<ImageFile> list = fileUtils.insertFileInfo(files);
		for (int i = 0; i < list.size(); i++) {
			ImageFile fileList = list.get(i);
			fileList.setPost_id(post.getPost_id());
			postRepository.updateFile(fileList);
		}
	}
	
	// 댓글 등록
	public void setComment(Comment comment) {
		comment.setUser_id("yooram2"); // 임시 저장
		postRepository.setComment(comment);
	}
	
	// 댓글 리스트
	public List<Comment> getComment(int post_id) {
		return postRepository.getComment(post_id);
	}
	
	// 댓글 삭제
	public void deleteComment(int comment_id) {
		postRepository.deleteComment(comment_id);
	}
	
	// 댓글 수정
	public void editComment(CommentEditDto commentEditDto) {
		Comment comment = new Comment(commentEditDto);
		postRepository.editComment(comment);
		
	}

	public List<Post> favoriteList(String user_id) {
		return postRepository.selectFavorite(user_id);
	}

	public List<Post> myList(String user_id) {
		return postRepository.selectMyHistory(user_id);
	}
}
