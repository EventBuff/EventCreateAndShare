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

    @RequestMapping("/signup")
    public String signUp(String email, String username, String password){
        if(userRepository.findByEmail(email) == null && password != null && username != null
                && email != null){
            userRepository.save(new com.BackEnd.domain.User(email, username, password));
            userRepository.setFixedIsadminFor(false, userRepository.findByEmail(email).getUserid());
            userRepository.setFixedIsdeleteFor(false, userRepository.findByEmail(email).getUserid());
            return "success";
        }
        return "failure";
    }
}
