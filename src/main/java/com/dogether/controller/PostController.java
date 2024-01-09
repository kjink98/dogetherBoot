package com.dogether.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dogether.domain.Comment;
import com.dogether.domain.ImageFile;
import com.dogether.domain.Post;
import com.dogether.dto.CommentEditDto;
import com.dogether.dto.Post2ProcDto;
import com.dogether.dto.PostListDto;
import com.dogether.service.PostService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/post")
public class PostController {

    private final PostService postService;

    @GetMapping("/mainList/{news}/{promotion}")
    public Map<String, Object> getMainList(@PathVariable String news, @PathVariable String promotion) {
        List<PostListDto> newsList = postService.getMainList(news);
        List<PostListDto> promotionList = postService.getMainList(promotion);
        Map<String, Object> map = new HashMap<>();
        map.put("newsList", newsList);
        map.put("promotionList", promotionList);
        return map;
    }

    @GetMapping("/list/{board_category}")
    public List<PostListDto> getPostList(@PathVariable String board_category) {
        return postService.getPostList(board_category);
    }

    @GetMapping("/detail/{board_category}/{post_id}")
    public Map<String, Object> getPostDetail(Post post, HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String user_id = authentication.getName();
        Map<String, Object> map = postService.getPostDetail(post, user_id);
        return map;
    }

    @PostMapping(path = "/post", consumes = { "multipart/form-data" })
    public ResponseEntity<String> setPost(@RequestPart Post post,
            @RequestPart(value = "files", required = false) MultipartFile[] files, Authentication authentication) {
    	String user_id = authentication.getName();
        postService.setPost(post, files, user_id);
        return ResponseEntity.ok().body(authentication.getName() + "님의 리뷰 등록이 완료되었습니다.");
    }

    // 글쓰기 에디터용(뉴스)
    @PostMapping(path = "/img", consumes = { "multipart/form-data" })
    public String setImage(@RequestPart String board_category, @RequestPart(value = "image") MultipartFile file) {
        String url = postService.setImage(board_category, file);
        return url;
    }

    // 글쓰기 에디터용(뉴스)
    @PostMapping("/post2")
    public String setPost2(@RequestBody Post2ProcDto post, Authentication authentication) {
    	String user_id = authentication.getName();
        postService.setPost2(post, user_id);
        return "setPost2";
    }

    @DeleteMapping("/delete/{post_id}")
    public String deletePost(@PathVariable int post_id) {
        postService.deletePost(post_id);
        return "delete";
    }

    @PutMapping(path = "/update", consumes = { "multipart/form-data" })
    public String updatePost(@RequestPart Post post,
            @RequestPart(value = "files", required = false) MultipartFile[] files) {
        postService.updatePost(post, files);
        return "update";
    }

    // 댓글 등록
    @PostMapping("/comment")
    public String setComment(@RequestBody Comment comment, Authentication authentication) {
    	String user_id = authentication.getName();
        postService.setComment(comment, user_id);
        return "comment";
    }

    // 댓글 리스트 가져오기
    @GetMapping("/commentList/{post_id}")
    public List<Comment> getComment(@PathVariable int post_id) {
        return postService.getComment(post_id);
    }

    @DeleteMapping("/commentDelete/{comment_id}")
    public String deleteComment(@PathVariable int comment_id) {
        postService.deleteComment(comment_id);
        return "delete";
    }

    @PutMapping("/commentEdit")
    public String editComment(@RequestBody CommentEditDto commentEditDto) {
        postService.editComment(commentEditDto);
        return "edit";
    }

    @GetMapping("/favorite/{user_id}")
    public List<Post> getFavoritePostList(@PathVariable String user_id) {
        List<Post> favoritePosts = postService.favoriteList(user_id);
        /*
         * Test
         * System.out.println(user_id);
         * for (Post post : favoritePosts) {
         * System.out.println("post_id : " + post.getPost_id());
         * }
         */
        return favoritePosts;
    }

    @GetMapping("/myhistory/{user_id}")
    public List<Post> getMyPostList(@PathVariable String user_id) {
        List<Post> myPosts = postService.myList(user_id);
        /*
         * Test
         * System.out.println(user_id);
         * for (Post post : favoritePosts) {
         * System.out.println("post_id : " + post.getPost_id());
         * }
         */
        return myPosts;
    }

}
