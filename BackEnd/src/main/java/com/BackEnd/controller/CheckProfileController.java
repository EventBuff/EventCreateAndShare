package com.BackEnd.controller;

import com.BackEnd.domain.User;
import com.BackEnd.domain.UserRepository;
import com.BackEnd.entity.CheckProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * Created by yanli on 11/6/16.
 */

@RestController
public class CheckProfileController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/profile")
    public CheckProfile checkProfile(@RequestParam Integer userid){
        if(userRepository.findByUserid(userid) != null){
            User user = userRepository.findByUserid(userid);
            return new CheckProfile(user.getEmail(), user.getUsername(), user.getPhonenumber(), user.getIsadmin(), user.getIsdelete(),
                    user.getFirstname(), user.getLastname(), user.getLocation(), user.getGender(), user.getDescription());
        }
        return null;
    }
}
