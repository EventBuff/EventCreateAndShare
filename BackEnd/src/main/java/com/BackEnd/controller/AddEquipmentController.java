package com.BackEnd.controller;

import com.BackEnd.domain.EquipmentRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * Created by yanli on 11/7/16.
 */

@RestController
public class AddEquipmentController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EquipmentRepository equipmentRepository;

    @RequestMapping("/equipment/add")
    public String addEquipment(@RequestParam String equipmentdescription, @RequestParam String equipmentname, @RequestParam Integer userid){
        //if the user is admin and the equipment is not exist
        if(equipmentRepository.findByEquipmentname(equipmentname) == null
                && userRepository.findByUserid(userid) != null
                && userRepository.findByUserid(userid).getIsadmin() == true){
            equipmentRepository.save(new com.BackEnd.domain.Equipment(equipmentdescription, equipmentname));
            return "success";
        }
        return "failure";
    }
}
