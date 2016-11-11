package com.BackEnd.controller;

import com.BackEnd.domain.User;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by lich on 11/7/16.
 */
@RestController
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    private User user;

    @RequestMapping("/login")
    public User logIn(@RequestParam String email, @RequestParam String password){
        System.out.println(email + ' ' + password);
        user = userRepository.findByEmail(email);
        return user;
    }

}
