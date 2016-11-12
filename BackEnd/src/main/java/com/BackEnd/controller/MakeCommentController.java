package com.BackEnd.controller;

import com.BackEnd.domain.CommentRepository;
import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.UserEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class MakeCommentController {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserEventRepository userEventRepository;

    @RequestMapping("/eventDetail/makeComment")
    public String makeComment(Integer eventid, Integer userid, String comment){
        //if event is not closed
        if(eventRepository.findByEventid(eventid).getIsclose() == false){
            //user is creator or participant
            if(eventRepository.findByEventid(eventid).getCreatorid() == userid ||
                    userEventRepository.findByEventidAndParticipantid(eventid, userid) != null){
                commentRepository.save(new com.BackEnd.domain.Comment(userid, eventid, comment));
                return "success";
            }
        }
        return "false";
    }
}
