package com.dogether.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
/**
 * 메인 페이지와 관련된 요청을 처리하는 컨트롤러
 */
@Controller
public class MainController {
	/**
     * 사용자가 메인 페이지를 요청하면 이 메소드가 호출
     * 메인 페이지("index")로 이동.
     */
    @GetMapping("/index")
    public String index() {
        return "index";
    }

}
