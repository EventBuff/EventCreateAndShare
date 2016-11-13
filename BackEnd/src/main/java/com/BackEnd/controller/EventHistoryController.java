package com.BackEnd.controller;

import com.BackEnd.domain.Event;
import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.UserEvent;
import com.BackEnd.domain.UserEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;
/**
 * Created by yanli on 11/12/16.
 */
@RestController
public class EventHistoryController {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserEventRepository userEventRepository;

    @RequestMapping("/profile/eventhistory")
    public List<Event> eventHistory(Integer userid){
        List<Event> eventList = new ArrayList<Event>();
        List<UserEvent> userEventList;
        //event that user create
        if(eventRepository.findByCreatorid(userid) != null){
            eventList.addAll(eventRepository.findByCreatorid(userid));
        }
        //event that user participate in
        if(userEventRepository.findByParticipantid(userid) !=null){
            userEventList = userEventRepository.findByParticipantid(userid);
            for(int i = 0; i< userEventList.size(); i++){
                eventList.add(eventRepository.findByEventid(userEventList.get(i).getEventid()));
            }
        }
        return eventList;
    }
}
