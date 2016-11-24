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
 * Created by yanli on 11/12/16.
 */
@RestController
public class EventHistoryController {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserEventRepository userEventRepository;
    @Autowired
    private EventEquipmentRepository eventEquipmentRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EquipmentRepository equipmentRepository;

    @RequestMapping("/profile/eventhistory")
    public List<EventDetail> eventHistory(@RequestParam Integer userid){
        List<EventDetail> eventDetails = new ArrayList<EventDetail>();
        //List<UserEvent> userEventList;
        //event that user create
        if(eventRepository.findByCreatorid(userid) != null){
            for(com.BackEnd.domain.Event event: eventRepository.findByCreatorid(userid)){
                List<String> equipmentname = new ArrayList<String>();
                for(com.BackEnd.domain.EventEquipment eventEquipment: eventEquipmentRepository.findByEventid(event.getEventid())){
                    equipmentname.add(equipmentRepository.findByEquipmentid(eventEquipment.getEquipmentid()).getEquipmentname());
                }
                eventDetails.add(new EventDetail(event, userRepository.findByUserid(userid).getUsername(), equipmentname));
            }
            //eventList.addAll(eventRepository.findByCreatorid(userid));
        }
        //event that user participate in
        if(userEventRepository.findByParticipantid(userid) !=null){
            for(com.BackEnd.domain.UserEvent userEvent: userEventRepository.findByParticipantid(userid)){
                List<String> equipmentname = new ArrayList<String>();
                for(com.BackEnd.domain.EventEquipment eventEquipment: eventEquipmentRepository.findByEventid(userEvent.getEventid())){
                    equipmentname.add(equipmentRepository.findByEquipmentid(eventEquipment.getEquipmentid()).getEquipmentname());
                }
                eventDetails.add(new EventDetail(eventRepository.findByEventid(userEvent.getEventid()), userRepository.findByUserid(userid).getUsername(), equipmentname));
            }
        }
        return eventDetails;
    }
}
