package com.BackEnd.controller;

import com.BackEnd.domain.Comment;
import com.BackEnd.domain.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class CommentListController {
    @Autowired
    private CommentRepository commentRepository;

    @RequestMapping("/eventDetail/comment")
    public List<Comment> commentList(Integer eventid){
        List<Comment> commentList;
        commentList = commentRepository.findByEventid(eventid);
        return commentList;
    }
}
