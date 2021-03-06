package com.BackEnd.controller;

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
public class CloseEventController {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserEventRepository userEventRepository;
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/eventDetail/close")
    public String closeEvent(@RequestParam Integer eventid, @RequestParam Integer userid, @RequestParam String closereason){
        //if event and user exist
        if(eventRepository.findByEventid(eventid) != null && userRepository.findByUserid(userid) !=null
                //if user is creator
                && eventRepository.findByEventid(eventid).getCreatorid() == userid){
            //set isClose true
            eventRepository.setFixedIscloseFor(true, eventid);
            eventRepository.setFixedClosereasonFor(closereason, eventid);
//            //delete participants
//            userEventRepository.deleteByEventid(eventid);
            return "success";
        }
        else return "failure";
    }
}
