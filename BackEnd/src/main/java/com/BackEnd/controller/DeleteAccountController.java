//package com.BackEnd.controller;
//
//import com.BackEnd.domain.EventRepository;
//import com.BackEnd.domain.UserEventRepository;
//import com.BackEnd.domain.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
///**
// * Created by yanli on 11/11/16.
// */
//@RestController
//public class DeleteAccountController {
//    @Autowired
//    private UserRepository userRepository;
//    @Autowired
//    private UserEventRepository userEventRepository;
//    @Autowired
//    private EventRepository eventRepository;
//
//    @RequestMapping("/profile/delete")
//    public String deleteAccount(Integer userid, String username, String password, String email){
//        //if user is right
//        if(userRepository.findByUserid(userid).getUsername() == username
//                && userRepository.findByUserid(userid).getPassword() == password &&
//                userRepository.findByUserid(userid).getEmail() == email){
//            userRepository.findByUserid(userid).setIsdelete(true);
//            //close event which user create
//            //if user is creator
//            if(eventRepository.findByCreatorid(userid) != null && userRepository.findByUserid(userid) !=null
//                    //if user is creator
//                    && eventRepository.findByEventid(eventid).getCreatorid() == userid){
//                //set isClose true
//                eventRepository.findByEventid(eventid).setIsclose(true);
//                //delete participants
//                userEventRepository.delete(eventid);
//            return "success";
//        }
//        return "false";
//    }
//}
