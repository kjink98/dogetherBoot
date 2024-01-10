package com.dogether.controller;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dogether.domain.Review;
import com.dogether.service.ReviewService;
import com.dogether.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/review")
public class ReviewController {
    private final ReviewService reviewService;
    private final UserService userService;

    @GetMapping("/{place_id}")
    public List<Review> getReviewList(@PathVariable int place_id) {
        List<Review> reviews = reviewService.list(place_id);
        return reviews;
    }

    @PostMapping("")
    public boolean saveReview(@RequestBody Review review, Authentication authentication) {
        String user_id = authentication.getName();
        String user_nickname = userService.findOne(user_id).get().getUser_nickname();
        if (user_id == "") {
            return false;
        } else {
            review.setUser_id(user_id);
            review.setUser_nickname(user_nickname);
            reviewService.insertReview(review);
            return true;
        }
    }

    @GetMapping("/rating/{place_id}")
    public List<Integer> getRatings(@PathVariable int place_id) {
        return reviewService.getRatings(place_id);
    }

}
