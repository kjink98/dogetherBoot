package com.dogether;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AppApplicationTests {

	@Autowired
	private PostService postService;
	@Test
	void contextLoads() {
	}

	@Test
	void testRepository() {
		for (int i = 0; i < 300; i++) {
			String subject = String.format("테스트 데이터입니다:[%03d]", i);
			String content = "내용무";
			
		}
	}

}
