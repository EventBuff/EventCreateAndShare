package com.BackEnd.controller;

import com.BackEnd.domain.Event;
import com.BackEnd.entity.EventDetail;
import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/6/16.
 */

@RestController
public class EventDetailController {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/eventDetail")
    public EventDetail eventDetail(Integer eventid){
        //if event exist
        if(eventRepository.findByEventid(eventid) != null &&
                userRepository.findByUserid(eventRepository.findByEventid(eventid).getCreatorid()) != null){
            Integer creatorid = eventRepository.findByEventid(eventid).getCreatorid();
            return new EventDetail(eventRepository.findByEventid(eventid),
                    userRepository.findByUserid(creatorid).getUsername());
        }
        else return null;
    }

}
