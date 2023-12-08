package com.dogether.service;

import java.util.Optional;



import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
//스프링부트가 제공하는 임시 비밀번호가 아니라 DB에서 가져온 회원정보 데이터를 사용하기 위해 UserDetailService 구현을 이용함.
public class MyUserDetailsService implements UserDetailsService {
	private final UserService userService;
	
	public MyUserDetailsService(UserService userService) {
		this.userService = userService;
    }
	
	@Override 
	public UserDetails loadUserByUsername(String insertedId) throws UsernameNotFoundException {
        // 파라미터인 insertedId 부분에는 기존에 설정해두었던 
		// usernameParameter("id")에 해당하는 정보가 들어오게 된다. 
    	// 비밀번호가 동일한지 체크는 스프링부트에서 알아서 진행하게 되므로 DB에서 아이디만 가져오면 된다.
		
			Optional<com.dogether.domain.User> findOne = userService.findOne(insertedId); 

			com.dogether.domain.User user = findOne.orElseThrow(
					() -> new UsernameNotFoundException("없는 회원입니다")
					);		
			
			/*
			 * System.out.println(findOne.isPresent());
			 * if (!findOne.isPresent()) {
			    // 여기서 예외 처리 또는 로그를 추가하여 올바르지 않은 ID에 대한 상황을 처리
			    // 사용자에게 알리거나 로그를 출력하여 이에 대한 조치를 취할 수 있습니다.
			    // 아니면 따로 에러 페이지 생성
			    throw new IllegalArgumentException("올바르지 않은 ID입니다.");
			}
			 * 
			 */
			
        // 사용자정의 User클래스의 빌더를 사용해
		// username에 아이디, password에 비밀번호, roles에 권한(역할)을 넣어주면 UserDetails가 리턴 된다.
			return User.builder()
			        .username(user.getUser_id())
			        .password(user.getUser_pw())
//                .roles(user.getRoles().toString())
			        .build();
		 
    }
}
