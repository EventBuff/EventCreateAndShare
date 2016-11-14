package com.BackEnd.controller;

import com.BackEnd.domain.User;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class EditProfileController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/profile/edit")
    public String editProfile(Integer userid, String email, String username, String firstname,
                              String lastname, String location, String gender, String phonenumber,
                              String description){
        if(userRepository.findByUserid(userid) != null && userRepository.findByUserid(userid).getIsdelete() == false){
            userRepository.setFixedEmailFor(email, userid);
            userRepository.setFixedUsernameFor(username, userid);
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
