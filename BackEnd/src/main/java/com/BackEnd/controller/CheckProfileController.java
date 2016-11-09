package com.BackEnd.controller;

import com.BackEnd.domain.User;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

/**
 * Created by yanli on 11/6/16.
 */

@RestController
@SessionAttributes("visitor")
public class CheckProfileController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/profile")
    public User checkProfile(@ModelAttribute("visitor") String id){
        Integer userid = 5;
        System.out.println("This is visitor userid " + id.toString());
        if(userRepository.findByUserid(userid) != null){
            return(userRepository.findByUserid(userid));
        }
        else return null;
    }
}
