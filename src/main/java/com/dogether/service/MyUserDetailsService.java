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
		System.out.println("sks?");
		this.userService = userService;
    }
	
	
//	loadUserByUsername 메서드가 호출되지 않는다면 스프링 시큐리티가 해당 메서드를 호출하는 과정에 문제가 있는 것일 수 있습니다. loadUserByUsername 메서드는 스프링 시큐리티에서 사용자 인증을 처리하는 과정 중 하나로, 사용자가 로그인을 시도할 때 호출됩니다.
//
//	아래 사항들을 확인해 보세요:
//
//	스프링 시큐리티 설정: 스프링 시큐리티의 설정이 올바르게 되어 있는지 확인해 보세요. httpSecurity의 authorizeRequests(), formLogin(), httpBasic() 등의 설정이 올바르게 이루어졌는지 확인해 보세요.
//	UserDetailsService 구현체 등록: MyUserDetailsService 클래스가 스프링 빈으로 올바르게 등록되었는지 확인해 보세요. @Component 어노테이션이 클래스 위에 올바르게 붙어 있는지, 그리고 스프링의 컴포넌트 스캔 범위에 해당 클래스가 포함되어 있는지 확인해 보세요.
//	스프링 시큐리티의 AuthenticationManager에 UserDetailsService 구현체 사용 설정: 스프링 시큐리티의 AuthenticationManager가 MyUserDetailsService를 사용하도록 설정되어 있는지 확인해 보세요. 이는 AuthenticationManagerBuilder의 userDetailsService() 메서드를 통해 설정할 수 있습니다.
//	로그인 시도: loadUserByUsername 메서드는 사용자가 로그인을 시도할 때 호출됩니다. 따라서 로그인을 시도하는 과정이 올바르게 진행되고 있는지 확인해 보세요. 로그인 폼의 action 속성이 /login으로 설정되어 있는지, 그리고 username과 password 필드가 올바르게 설정되어 있는지 확인해 보세요.
//	위 사항들을 확인해 보시고, 여전히 문제가 해결되지 않는다면 좀 더 자세한 상황 설명을 부탁드립니다. 그러면 문제의 원인을 좀 더 정확하게 파악하는 데 도움이 될 것입니다.
	@Override 
	public UserDetails loadUserByUsername(String insertedEmail) throws UsernameNotFoundException {
		System.out.println("sjsjsjsj");
		System.out.println("insertedEmail: " + insertedEmail);
        // 파라미터인 insertedEmail 부분에는 기존에 설정해두었던 
		// usernameParameter("id")에 해당하는 정보가 들어오게 된다. 
    	// 비밀번호가 동일한지 체크는 스프링부트에서 알아서 진행하게 되므로 DB에서 아이디만 가져오면 된다.
		Optional<com.dogether.domain.User> findOne = userService.findById(insertedEmail); 
		com.dogether.domain.User user = findOne.orElseThrow(() -> new UsernameNotFoundException("없는 회원입니다"));
        
        // 사용자정의 User클래스의 빌더를 사용해
		// username에 아이디, password에 비밀번호, roles에 권한(역할)을 넣어주면 UserDetails가 리턴 된다.
			return User.builder()
			        .username(user.getUser_id())
			        .password(user.getUser_pw())
//                .roles(user.getRoles().toString())
			        .build();
    }
}
