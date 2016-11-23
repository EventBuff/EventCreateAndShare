package com.BackEnd.controller;

import com.BackEnd.domain.EquipmentRepository;
import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;

/**
 * Created by yanli on 11/11/16.
 */

@RestController
public class CreateEventController {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EquipmentRepository equipmentRepository;

    @RequestMapping("/createEvent")
    public String createEvent(String eventtitle, Timestamp starttime, Timestamp endtime, String eventdescription,
                                   Integer numofpeople, Integer nownum, String eventtag, String eventphoto,
                                   Integer creatorid, String location, String equipmentname){
        //if user is exist
        if(userRepository.findByUserid(creatorid) != null && userRepository.findByUserid(creatorid).getIsdelete() == false
                && equipmentRepository.findByEquipmentname(equipmentname) != null){
            eventRepository.save(new com.BackEnd.domain.Event(eventtitle, starttime, endtime, eventdescription,
                    numofpeople, nownum, eventtag, creatorid, eventphoto, location, false));
            return "success";
        }
        return "failure";

    }
}
