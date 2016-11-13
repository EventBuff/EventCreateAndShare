package com.BackEnd.controller;

import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class SignUpController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/index")
    public String signUp(String email, String username, String password, String phonenumber, Boolean isadmin,
                         String firstname, String lastname, String location, String gender, String description){
        if(userRepository.findByEmail(email) == null && password != null){
            userRepository.save(new com.BackEnd.domain.User(email, username, password, phonenumber, isadmin, false,
                    firstname, lastname, location, gender, description));
            return "success";
        }
        return "failure";
    }
}
