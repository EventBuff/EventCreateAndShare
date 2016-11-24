package com.BackEnd.controller;

import com.BackEnd.domain.*;
import com.BackEnd.entity.EventDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * Created by yanli on 11/6/16.
 */

@RestController
public class EventDetailController {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EquipmentRepository equipmentRepository;
    @Autowired
    private EventEquipmentRepository eventEquipmentRepository;

    @RequestMapping("/eventDetail")
    public EventDetail eventDetail(@RequestParam Integer eventid){
        //if event exist
        if(eventRepository.findByEventid(eventid) != null &&
                userRepository.findByUserid(eventRepository.findByEventid(eventid).getCreatorid()) != null){
            Integer creatorid = eventRepository.findByEventid(eventid).getCreatorid();
            List<String> equipmentname = new ArrayList<String>();
            for(com.BackEnd.domain.EventEquipment eventEquipment: eventEquipmentRepository.findByEventid(eventid)){
                equipmentname.add(equipmentRepository.findByEquipmentid(eventEquipment.getEquipmentid()).getEquipmentname());
            }
            return new EventDetail(eventRepository.findByEventid(eventid),
                    userRepository.findByUserid(creatorid).getUsername(), equipmentname);
        }
        return null;
    }

}
