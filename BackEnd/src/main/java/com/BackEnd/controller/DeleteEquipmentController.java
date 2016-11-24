package com.BackEnd.controller;

import com.BackEnd.domain.EquipmentRepository;
import com.BackEnd.domain.EventEquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by yanli on 11/11/16.
 */
@RestController
public class DeleteEquipmentController {
    @Autowired
    private EquipmentRepository equipmentRepository;
    @Autowired
    private EventEquipmentRepository eventEquipmentRepository;

    @RequestMapping("/equipment/delete")
    public String deleteEquipment(@RequestParam Integer equipmentid){
        if(equipmentRepository.findByEquipmentid(equipmentid) != null){
            equipmentRepository.delete(equipmentid);
            eventEquipmentRepository.deleteByEquipmentid(equipmentid);
            return "success";
        }
        return "false";
    }
}
