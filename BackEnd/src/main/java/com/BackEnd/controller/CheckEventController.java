package com.BackEnd.controller;

import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.UserEventRepository;
import com.BackEnd.domain.UserRepository;
import javafx.event.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class CheckEventController {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserEventRepository userEventRepository;
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/eventDetail/check")
    public String checkEvent(@RequestParam Integer eventid, @RequestParam Integer userid){
        //if event and user exist
        if(eventRepository.findByEventid(eventid) != null && userRepository.findByUserid(userid) != null){
            //if user is creator, participant, nonparticipant
            if(eventRepository.findByEventid(eventid).getCreatorid() == userid){
                return "creator";
            }
            else if(userEventRepository.findByEventidAndParticipantid(eventid, userid) != null){
                return "participant";
            }
        }
        return "nonparticipant";
    }
}
