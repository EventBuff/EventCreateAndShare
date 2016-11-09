package com.BackEnd.controller;

import com.BackEnd.domain.User;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lich on 11/7/16.
 */
@RestController
@SessionAttributes("visitor")
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    private User user;

    @RequestMapping("/login")
    public String logIn(@RequestParam String email, @RequestParam String password){
        System.out.println(email + ' ' + password);
        user = userRepository.findByEmail(email);
        return "This page for login";
    }
//    will do this function first
    @ModelAttribute("visitor")
    public String getVisitor (HttpServletRequest request) {
        System.out.println("in get visitor");
        return request.getSession().getId();
    }
}
