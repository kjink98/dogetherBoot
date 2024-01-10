package com.dogether.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.Comment;
import com.dogether.domain.FavoritePost;
import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.mapper.PostMapper;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PostRepository {

    private final PostMapper postMapper;
    
    // 게시글 5개만 가져오기
    public List<Post> getMainData(String board_category) {
    	return postMapper.selectMainData(board_category);
    }

	// 전체 게시글 내용 목록 가져오기
    public List<Post> getDataAll(String board_category) {
        return postMapper.selectAll(board_category);
    }
    
    // 게시글 전체 이미지 목록 가져오기
    public List<ImageFile> getFileList(String board_category) {
    	return postMapper.selectFileList(board_category);
    }

	// 1개 게시글 내용 가져오기
    public Post getDataOne(Post post) {
        return postMapper.selectOne(post);
    }

	// 1개 게시글 이미지 목록 가져오기
    public List<ImageFile> getFile(int post_id) {
        return postMapper.selectFile(post_id);
    }
    
    // 조회수 업데이트
    public void updateViews(int post_id) {
    	postMapper.updateViews(post_id);
    }

	// 게시글 등록
    public void setData(Post post) {
        postMapper.insertOne(post);
    }

	// 이미지 등록
    public void insertFile(ImageFile imageFile) {
        postMapper.insertFile(imageFile);
    }

	// 게시글 삭제
    public void deletePost(int post_id) {
        postMapper.deletePost(post_id);
    }
    
    // 이미지 삭제
    public void deleteFile(int post_id) {
    	postMapper.deleteFile(post_id);
    }
	
    // 게시글 수정
    public void updatePost(Post post) {
    	postMapper.updatePost(post);
    }
    
    // 이미지 재등록(수정 시)
    public void updateFile(ImageFile imageFile) {
    	postMapper.updateFile(imageFile);
    }
    
	// 댓글 등록
	public void setComment(Comment comment) {
		postMapper.insertComment(comment);
	}
	
	// 댓글 리스트
	public List<Comment> getComment(int post_id) {
		return postMapper.selectComment(post_id);
	}
	
	// 댓글 1개 삭제
	public void deleteComment(int comment_id) {
		postMapper.deleteComment(comment_id);
	}
	
	// 댓글 전체 삭제
	public void deleteCommentAll(int post_id) {
		postMapper.deleteCommentAll(post_id);
	}
	
	// 댓글 수정
	public void editComment(Comment comment) {
		postMapper.editComment(comment);
	}

    public List<Post> selectFavorite(String user_id) {
        return postMapper.selectFavorite(user_id);
    }

    public void insertFavorite(FavoritePost favoritePost) {
        postMapper.insertFavorite(favoritePost);
    }

    public int selectFavoriteOne(int post_id, String user_id) {
        return postMapper.selectFavoriteOne(post_id, user_id);
    }
    
    public List<Post> selectMyHistory(String user_id) {
        return postMapper.selectMyHistory(user_id);
    }
}
