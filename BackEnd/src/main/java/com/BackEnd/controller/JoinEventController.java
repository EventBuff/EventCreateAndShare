package com.BackEnd.controller;

import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.Event;
import com.BackEnd.domain.UserEventRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/6/16.
 */

@RestController
public class JoinEventController {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserEventRepository userEventRepository;

    @RequestMapping("/eventDetail/join")
    public String joinEvent(Integer eventid, Integer userid){
        //if event and user exist
         if(eventRepository.findByEventid(eventid) != null && userRepository.findByUserid(userid) != null
                 //if this event is not closed
                 && eventRepository.findByEventid(eventid).getIsclose() == false
                 //if user is not the creator
                 && eventRepository.findByEventid(eventid).getCreatorid() != userid){
             //if it has joined this event, just return else save then return
             if(userEventRepository.findByEventidAndParticipantid(eventid, userid) == null) {
                 userEventRepository.save(new com.BackEnd.domain.UserEvent(eventid, userid));
             }
             return "success";
        }
        else return "failure";
    }
}
