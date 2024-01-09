package com.dogether.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.Comment;
import com.dogether.domain.FavoritePost;
import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.domain.User;
import com.dogether.dto.CommentEditDto;
import com.dogether.dto.Post2ProcDto;
import com.dogether.dto.PostListDto;
import com.dogether.repository.PostRepository;
import com.dogether.repository.UserRepository;
import com.dogether.utils.FileUtils;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final FileUtils fileUtils;

    // 메인페이지 게시글 목록 가져오기
    public List<PostListDto> getMainList(String board_category) {
        List<PostListDto> list = new ArrayList<>();
        List<Post> postList = postRepository.getMainData(board_category);
        if (board_category.equals("news")) {
            for (int i = 0; i < postList.size(); i++) {
                PostListDto listDto = new PostListDto(postList.get(i));
                String content = listDto.getPost_content();

                Pattern pattern = Pattern.compile("<img\\s+src\\s*=\"/img/(.*?)\"\\s*>");
                Matcher matcher = pattern.matcher(content);
                if (matcher.find()) {
                    listDto.setFile_link(matcher.group(1));
                }
                list.add(listDto);
            }
        } else {
            for (int i = 0; i < postList.size(); i++) {
                PostListDto listDto = new PostListDto(postList.get(i));
                List<ImageFile> fileList = postRepository.getFile(listDto.getPost_id());

                if (fileList.size() != 0) {
                    listDto.setFile_id(fileList.get(0).getFile_id());
                    listDto.setFile_link(fileList.get(0).getFile_link());
                }
                list.add(listDto);
            }
        }
        return list;
    }

    // 전체 게시글 목록 가져오기
    public List<PostListDto> getPostList(String board_category) {

        List<PostListDto> list = new ArrayList<>();

        List<Post> postList = postRepository.getDataAll(board_category);
        if (board_category.equals("news")) {
            for (int i = 0; i < postList.size(); i++) {
                PostListDto listDto = new PostListDto(postList.get(i));
                String content = listDto.getPost_content();

                Pattern pattern = Pattern.compile("<img\\s+src\\s*=\"/img/(.*?)\"\\s*>");
                Matcher matcher = pattern.matcher(content);
                if (matcher.find()) {
                    listDto.setFile_link(matcher.group(1));
                }
                list.add(listDto);
            }
        } else {
            List<ImageFile> fileList = getFileList(board_category);

            for (int i = 0; i < postList.size(); i++) {
                PostListDto listDto = new PostListDto(postList.get(i));
                // 이미지 하나만 담기
                Optional<ImageFile> result = fileList.stream().filter(x -> x.getPost_id() == listDto.getPost_id())
                        .findFirst();
                if (result.isPresent()) {
                    listDto.setFile_id(result.get().getFile_id());
                    listDto.setFile_link(result.get().getFile_link());
                }
                list.add(listDto);
            }
        }
        return list;
    }

    // 게시판 전체 이미지 목록 가져오기
    public List<ImageFile> getFileList(String board_category) {
        return postRepository.getFileList(board_category);
    }

    // 1개 게시글 내용, 이미지 목록 가져오기
    public Map<String, Object> getPostDetail(Post post, String user_id) {
        Post detail = postRepository.getDataOne(post);
        User user = userRepository.findById(user_id).get();
        Map<String, Object> map = new HashMap<>();
        map.put("detail", detail);
        map.put("user_nickname", user.getUser_nickname());
        if (post.getBoard_category().equals("news")) {

        } else {
            List<ImageFile> fileList = postRepository.getFile(post.getPost_id());
            map.put("files", fileList);
        }
        // 글쓴이 여부
        if (detail.getUser_id().equals(user_id)) {
            map.put("userCheck", "yes");
        } else {
            map.put("userCheck", "no");

        }
        return map;
    }

    // 조회수 업데이트
    public void setViews(int post_id, HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();
        Cookie newCookie = null;

        if (cookies != null) {
            for (int i = 0; i < cookies.length; i++) {
                if (cookies[i].getName().equals("|" + post_id + "|")) {
                    newCookie = cookies[i];
                }
            }
        } else {
            newCookie = null;
        }

        if (newCookie == null || !newCookie.getName().equals("|" + post_id + "|")) {
            postRepository.updateViews(post_id);

            Cookie cookie = new Cookie("|" + post_id + "|", "views");
            response.addCookie(cookie);
        }

    }

    // 게시글 등록
    public void setPost(Post post, MultipartFile[] files, String user_id) {
        User user = userRepository.findById(user_id).get();
        post.setUser_id(user_id);
        post.setUser_nickname(user.getUser_nickname());
        postRepository.setData(post);

        List<ImageFile> list = fileUtils.insertFileInfo(post.getBoard_category(), files);
        for (int i = 0; i < list.size(); i++) {
            postRepository.insertFile(list.get(i));
        }
    }

    // 1개 이미지 url, file 생성
    public String setImage(String board_category, MultipartFile file) {
        ImageFile imageFile = fileUtils.insertFileOne(board_category, file);
        return imageFile.getFile_link();
    }

    // 글쓰기 에디터용(뉴스) 게시글 등록
    public void setPost2(Post2ProcDto post2ProcDto, String user_id) {
        User user = userRepository.findById(user_id).get();
        Post post = new Post(post2ProcDto);
        post.setUser_id(user_id);
        post.setUser_nickname(user.getUser_nickname());
        postRepository.setData(post);

        // 최종 이미지 리스트 DB 저장
        String[] lastUrlList = post2ProcDto.getLastUrlList();
        for (int i = 0; i < lastUrlList.length; i++) {
            ImageFile file = new ImageFile();
            file.setBoard_category(post2ProcDto.getBoard_category());
            file.setFile_link(lastUrlList[i]);
            file.setFile_oriname("hi"); // 임시저장
            postRepository.insertFile(file);
        }

        // 최종이 아닌 이미지 file 삭제
        String[] deleteUrlList = post2ProcDto.getDeleteUrlList();
        List<ImageFile> list = new ArrayList<>();
        for (int i = 0; i < deleteUrlList.length; i++) {
            ImageFile file = new ImageFile();
            file.setFile_link(deleteUrlList[i]);
            list.add(file);
        }
        fileUtils.deleteFile(list);
    }

    // 게시글 삭제
    public void deletePost(int post_id) {
        // 게시글 DB 삭제
        postRepository.deletePost(post_id);
        // 이미지 DB 삭제
        postRepository.deleteFile(post_id);
        // 이미지 실제 파일 삭제
        fileUtils.deleteFile(postRepository.getFile(post_id));
        // 댓글 삭제
        postRepository.deleteCommentAll(post_id);
    }

    // 게시글 수정
    public void updatePost(Post post, MultipartFile[] files) {
        // 게시글 DB 수정
        postRepository.updatePost(post);
        // 기존 이미지 DB, 실제 파일 삭제
        postRepository.deleteFile(post.getPost_id());
        fileUtils.deleteFile(postRepository.getFile(post.getPost_id()));
        // 새 이미지 등록
        List<ImageFile> list = fileUtils.insertFileInfo(post.getBoard_category(), files);
        for (int i = 0; i < list.size(); i++) {
            ImageFile fileList = list.get(i);
            fileList.setPost_id(post.getPost_id());
            postRepository.updateFile(fileList);
        }
    }

    // 댓글 등록
    public void setComment(Comment comment, String user_id) {
        User user = userRepository.findById(user_id).get();
        comment.setUser_id(user_id);
        comment.setUser_nickname(user.getUser_nickname());
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

    public boolean setFavoritePost(FavoritePost favoritePost, String user_id) {
        if (userRepository.findById(user_id).get() != null && favoritePost.getPost_id() != 0) {
            if (postRepository.selectFavoriteOne(favoritePost.getPost_id(), user_id) == 0) {
                try {
                    favoritePost.setUser_id(user_id);
                    postRepository.insertFavorite(favoritePost);
                } catch (Exception e) {
                    e.printStackTrace();
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }

    public List<Post> myList(String user_id) {
        return postRepository.selectMyHistory(user_id);
    }
}
