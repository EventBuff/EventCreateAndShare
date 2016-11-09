package com.BackEnd.controller;

import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.UserEventRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/7/16.
 */

@RestController
public class CloseEventController {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserEventRepository userEventRepository;
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/eventDetail/close")
    public String closerEvent(Integer eventid, Integer userid){
        //if event and user exist
        if(eventRepository.findByEventid(eventid) != null && userRepository.findByUserid(userid) !=null
                //if user is creator
                && eventRepository.findByEventid(eventid).getCreatorid() == userid){
            //set isClose true
            eventRepository.findByEventid(eventid).setIsclose(true);
            //delete participants
            userEventRepository.delete(eventid);
            return "This event is closed!";
        }
        else return "You cannot close this event!";
    }
}
