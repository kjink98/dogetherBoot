package com.dogether.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dogether.domain.Review;
import com.dogether.service.ReviewService;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/dog/review")
public class ReviewController {
    private final ReviewService reviewService;

    @GetMapping("/{place_id}/review")
    public List<Review> getReviewList(@PathVariable int place_id) {
        List<Review> reviews = reviewService.list(place_id);
        return reviews;
    }

    @PostMapping("/{place_id}/review")
    public void saveReview(@PathVariable final int place_id, @RequestBody Review review) {
        reviewService.insertReview(review);
    }

    @GetMapping("/rating/{place_id}")
    public List<Integer> getRatings(@PathVariable int place_id) {
        return reviewService.getRatings(place_id);
    }
    
}
