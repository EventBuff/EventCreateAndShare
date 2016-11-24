package com.BackEnd.controller;

import com.BackEnd.domain.Event;
import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.UserEventRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by yanli on 11/7/16.
 */

@RestController
public class LeaveEventController {

    @Autowired
    private UserEventRepository userEventRepository;
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/eventDetail/leave")
    public String leaveEvent(@RequestParam Integer eventid, @RequestParam Integer userid){
        //If event and user exist
        if(eventRepository.findByEventid(eventid) != null && userRepository.findByUserid(userid) !=null
                //if user has participated in this event
                && userEventRepository.findByEventidAndParticipantid(eventid, userid) !=null
                //if this event is not closed
                && eventRepository.findByEventid(eventid).getIsclose() == false
                //if user is not creator
                && eventRepository.findByEventid(eventid).getCreatorid() != userid){
            //nownum -1
            Integer numPeople = eventRepository.findByEventid(eventid).getNownum();
            numPeople -= 1;
            eventRepository.setFixedNownumFor(numPeople, eventid);
            //delete user from event
            userEventRepository.deleteByEventidAndParticipantid(eventid, userid);
            return "success";
        }
        else return "failure";
    }
}
