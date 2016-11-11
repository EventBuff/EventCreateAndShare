package com.BackEnd.controller;

import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yanli on 11/3/16.
 */

@RestController
public class SearchEventController {

    @Autowired
    private EventRepository eventRepository;

    @RequestMapping("/searchEvent")
    public List<Event> searchEvent(String eventtag){
        List <Event> eventList;
        if(eventtag == null || eventtag.length() == 0){
            eventList = eventRepository.findAll();
        }
        else {
            eventList = eventRepository.findByEventtag(eventtag);
        }
        return eventList;
    }

}
