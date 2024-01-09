package com.dogether;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dogether.domain.Post;
import com.dogether.service.PostService;

@SpringBootTest
class AppApplicationTests {

	@Autowired
	private PostService postService;
	
	@Test
	void testRepository() {
		for (int i = 0; i < 50; i++) {
			Post post = new Post();
			post.setBoard_category("notice");
			post.setPost_content("내용무");
			String subject = String.format("테스트 데이터입니다:[%03d]", i);
			post.setPost_title(subject);
			post.setUser_id("TestUserID");
			post.setUser_nickname("TestUserNickname");

			this.postService.setPost(post, null, "TestUserID");
		}
	}

}
