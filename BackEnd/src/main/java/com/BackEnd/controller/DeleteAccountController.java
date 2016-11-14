package com.BackEnd.controller;

import com.BackEnd.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class DeleteAccountController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserEventRepository userEventRepository;
    @Autowired
    private EventRepository eventRepository;

    @RequestMapping("/profile/delete")
    public String deleteAccount(Integer userid, String username, String password, String email){
        //if user is right
        if(userRepository.findByUserid(userid).getUsername().equals(username) &&
                userRepository.findByUserid(userid).getPassword().equals(password) &&
                userRepository.findByUserid(userid).getEmail().equals(email)){
            userRepository.findByUserid(userid).setIsdelete(true);
            //close event which user create
            //if user is creator, close the event which is open
            if(eventRepository.findByCreatorid(userid) != null){
                for(Event event: eventRepository.findByCreatorid(userid)){
                    //if the event is open
                    if(event.getIsclose() == false){
                        event.setIsclose(true);
                        //delete participant
                        userEventRepository.deleteByEventid(event.getEventid());
                    }
                }
            }
            //if user is participant, leave the event which is open
            if(userEventRepository.findByParticipantid(userid) != null){
                for(UserEvent userEvent: userEventRepository.findByParticipantid(userid)){
                    //if the event is still open
                    if(eventRepository.findByEventid(userEvent.getEventid()).getIsclose() == false) {
                        //delete participant in event
                        userEventRepository.delete(userEvent);
                    }
                }
            }
            return "success";
        }
        return "failure";
    }
}
