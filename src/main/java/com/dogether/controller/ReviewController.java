package com.dogether.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dogether.domain.Review;
import com.dogether.service.ReviewService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping("/dog/place/{place_id}/review")
    public void saveReview(@PathVariable final int place_id, @RequestBody Review review) {
        reviewService.insertReview(review);
    }
}
