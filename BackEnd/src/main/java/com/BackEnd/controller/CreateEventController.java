//package com.BackEnd.controller;
//
//import com.BackEnd.domain.EventRepository;
//import com.BackEnd.domain.UserRepository;
//import com.BackEnd.entity.CreateEvent;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.sql.Timestamp;
//
///**
// * Created by yanli on 11/11/16.
// */
//
//@RestController
//public class CreateEventController {
//    @Autowired
//    private EventRepository eventRepository;
//    @Autowired
//    private UserRepository userRepository;
//
//    @RequestMapping("/createEvent")
//    public CreateEvent createEvent(String eventtitle, Timestamp starttime, Timestamp endtime, String eventdescription,
//                                   Integer numofpeople, Integer nownum, String eventtag, Integer creatorid, String location){
//        //if user is exist
//        if(userRepository.findByUserid(creatorid) != null && userRepository.findByUserid(creatorid).getIsdelete() == false){
//            eventRepository.save(new com.BackEnd.domain.Event(eventtitle, starttime, endtime, eventdescription, numofpeople,
//                    nownum, eventtag, ) public Event(String eventtitle, Timestamp starttime, Timestamp endtime,
//                    String eventdescription, Integer numofpeople, Integer nownum, String eventtag,
//                    String eventphoto, String location, Boolean isclose))
//        }
//
//    }
//}
