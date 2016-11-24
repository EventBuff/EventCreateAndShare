package com.BackEnd.controller;

import com.BackEnd.domain.User;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class EditProfileController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/profile/edit")
    public String editProfile(@RequestParam Integer userid, @RequestParam String firstname, @RequestParam String lastname,
                              @RequestParam String location, @RequestParam String gender, @RequestParam String phonenumber,
                              @RequestParam String description){
        if(userRepository.findByUserid(userid) != null && userRepository.findByUserid(userid).getIsdelete() == false){
            userRepository.setFixedFirstnameFor(firstname, userid);
            userRepository.setFixedLastnameFor(lastname, userid);
            userRepository.setFixedLocationFor(location, userid);
            userRepository.setFixedGenderFor(gender, userid);
            userRepository.setFixedPhonenumberFor(phonenumber, userid);
            userRepository.setFixedDescriptionFor(description, userid);
            return "success";
        }
        return "failure";
    }
}
