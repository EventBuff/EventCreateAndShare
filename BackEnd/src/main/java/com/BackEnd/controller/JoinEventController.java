package com.BackEnd.controller;

import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.Event;
import com.BackEnd.domain.UserEventRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

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
    public String joinEvent(@RequestParam Integer eventid, @RequestParam Integer userid){
        //if event and user exist
         if(eventRepository.findByEventid(eventid) != null && userRepository.findByUserid(userid) != null
                 //if this event is not closed
                 && eventRepository.findByEventid(eventid).getIsclose() == false
                 //if user is not the creator
                 && eventRepository.findByEventid(eventid).getCreatorid() != userid
                 //if the event is not full
                 && eventRepository.findByEventid(eventid).getNownum() < eventRepository.findByEventid(eventid).getNumofpeople()){
             //if it has joined this event, just return else save then return
             if(userEventRepository.findByEventidAndParticipantid(eventid, userid) == null) {
                 userEventRepository.save(new com.BackEnd.domain.UserEvent(eventid, userid));
                 //nownum +1
                 Integer numPeople = eventRepository.findByEventid(eventid).getNownum();
                 numPeople += 1;
                 eventRepository.setFixedNownumFor(numPeople, eventid);
             }
             return "success";
        }
        else return "failure";
    }
}
