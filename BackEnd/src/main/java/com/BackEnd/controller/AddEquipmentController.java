package com.BackEnd.controller;

import com.BackEnd.domain.EquipmentRepository;
import com.BackEnd.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yanli on 11/7/16.
 */

@RestController
public class AddEquipmentController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EquipmentRepository equipmentRepository;

    @RequestMapping("/equipment")
    public String addEquipment(String equipmentdescription, String equipmentname, Integer userid){
        //if the user is admin and the equipment is not exist
        if(equipmentRepository.findByEquipmentname(equipmentname) == null
                && userRepository.findByUserid(userid) != null
                && userRepository.findByUserid(userid).getIsadmin() == true){//userRepository.findByUserid(userid).getIsadmin() == true && equipmentRepository.findByEquipmentname(equipmentname) == null){
            equipmentRepository.save(new com.BackEnd.domain.Equipment(equipmentdescription, equipmentname));
            return "You add this equipment successfully!";
        }
        else return "You cannot add this equipment!";
    }
}
