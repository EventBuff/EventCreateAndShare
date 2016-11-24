package com.BackEnd.controller;

import com.BackEnd.domain.*;
import com.BackEnd.entity.EventDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by yanli on 11/3/16.
 */

@RestController
public class SearchEventController {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private EventEquipmentRepository eventEquipmentRepository;
    @Autowired
    private EquipmentRepository equipmentRepository;
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/searchEvent")
    public List<EventDetail> searchEvent(@RequestParam String eventtag){
        List <EventDetail> eventList = new ArrayList<EventDetail>();
        if(eventtag == null || eventtag.length() == 0){
           for(com.BackEnd.domain.Event event: eventRepository.findAll()){
               List<String> equipmentname = new ArrayList<String>();
               for(com.BackEnd.domain.EventEquipment eventEquipment: eventEquipmentRepository.findByEventid(event.getEventid())){
                   equipmentname.add(equipmentRepository.findByEquipmentid(eventEquipment.getEquipmentid()).getEquipmentname());
               }
               eventList.add(new EventDetail(event, userRepository.findByUserid(event.getCreatorid()).getUsername(), equipmentname));
           }
        }
        else {
            for(com.BackEnd.domain.Event event: eventRepository.findByEventtag(eventtag)){
                List<String> equipmentname = new ArrayList<String>();
                for(com.BackEnd.domain.EventEquipment eventEquipment: eventEquipmentRepository.findByEventid(event.getEventid())){
                    equipmentname.add(equipmentRepository.findByEquipmentid(eventEquipment.getEquipmentid()).getEquipmentname());
                }
                eventList.add(new EventDetail(event, userRepository.findByUserid(event.getCreatorid()).getUsername(), equipmentname));
            }
        }
        return eventList;
    }

}
