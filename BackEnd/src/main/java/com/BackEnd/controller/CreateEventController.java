package com.BackEnd.controller;

import com.BackEnd.domain.EquipmentRepository;
import com.BackEnd.domain.EventEquipmentRepository;
import com.BackEnd.domain.EventRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Timestamp;
import java.util.List;
import java.util.ArrayList;

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
    @Autowired
    private EventEquipmentRepository eventEquipmentRepository;

    @RequestMapping("/createEvent")
    public String createEvent(@RequestParam String eventtitle, @RequestParam Timestamp starttime, @RequestParam Timestamp endtime,
                              @RequestParam String eventdescription, @RequestParam Integer numofpeople, @RequestParam String eventtag,
                              @RequestParam String eventphoto, @RequestParam Integer creatorid, @RequestParam String location,
                              @RequestParam("equipmentid") List<Integer> equipmentid){
        //if user is exist
        if(userRepository.findByUserid(creatorid) != null && userRepository.findByUserid(creatorid).getIsdelete() == false){
            Integer nownum = 1;
            com.BackEnd.domain.Event event = eventRepository.save(new com.BackEnd.domain.Event(eventtitle, starttime,
                    endtime, eventdescription, numofpeople, nownum, eventtag, creatorid, eventphoto, location, false));
            for(Integer eId: equipmentid){
                eventEquipmentRepository.save(new com.BackEnd.domain.EventEquipment(event.getEventid(), eId));
            }
//            ArrayList<Integer>
//            for(int i = 0; i < equipmentid.size(); i++)
//            {
//                Integer eId = equipmentid.get(i);
//                eventEquipmentRepository.save(new com.BackEnd.domain.EventEquipment(event.getEventid(), eId));
//            }
//            eventEquipmentRepository.save(new com.BackEnd.domain.EventEquipment(event.getEventid(),
//                    equipmentRepository.findByEquipmentname(equipmentname).getEquipmentid()));
            return "success";
        }
        return "failure";

    }
}
