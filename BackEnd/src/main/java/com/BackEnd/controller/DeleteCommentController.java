package com.BackEnd.controller;

import com.BackEnd.domain.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class DeleteCommentController {
    @Autowired
    private CommentRepository commentRepository;

    @RequestMapping("/eventDetail/deletecomment")
    public String deleteComment(Integer commentid){
        if(commentRepository.findByCommentid(commentid) != null){
            commentRepository.delete(commentid);
            return "success";
        }
        return "failure";
    }
}
