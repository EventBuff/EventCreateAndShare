package com.BackEnd.controller;

import java.util.List;
import java.util.ArrayList;
import com.BackEnd.domain.Equipment;
import com.BackEnd.domain.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


/**
 * Created by yanli on 11/23/16.
 */
@RestController
public class EquipmentListController {
    @Autowired
    private EquipmentRepository equipmentRepository;

    @RequestMapping("/equipment")
    public List<Equipment> equipmentList(){
        return equipmentRepository.findAll();
    }
}
