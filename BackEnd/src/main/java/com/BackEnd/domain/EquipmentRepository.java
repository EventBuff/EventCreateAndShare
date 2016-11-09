package com.BackEnd.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;

/**
 * Created by yanli on 10/30/16.
 */
public interface EquipmentRepository extends JpaRepository<Equipment, Integer> {
    //query_analysis
    Equipment findByEquipmentid(Integer equipmentid);
    Equipment findByEquipmentname(String equipmentname);

    //change
    //equipmentname
    @Modifying
    @Transactional
    @Query("update Equipment equ set equ.equipmentname = ?1 where equ.equipmentid = ?2")
    int setFixedEquipmentnameFor(@Param("equipmentname") String equipmemntname ,@Param("equipmentid") Integer equipmentid);

    //equipmentdescription
    @Modifying
    @Transactional
    @Query("update Equipment equ set equ.equipmentdescription = ?1 where equ.equipmentid = ?2")
    int setFixedEquipmentdescriptionFor(@Param("equipmentdescription") String equipmemntdescription ,@Param("equipmentid") Integer equipmentid);

    //insert: save

    //delete: delete
    @Modifying
    @Transactional
    @Query(value="delete from Equipment equ where equ.equipmentname = ?1")
    void deleteByEquipmentname(String equipmentname);
}

//insert
//equipmentRepository.save(new com.SpringBootTest.domain.Equipment("this is a good equipment", "bicycle"));
//equipmentRepository.save(new com.SpringBootTest.domain.Equipment("this is a better equipment", "car"));
//equipmentRepository.save(new com.SpringBootTest.domain.Equipment("a tent contains 4 persons", "tent"));

//delete
//equipmentRepository.deleteByEquipmentname("car");

//query
//System.out.println(equipmentRepository.findByEquipmentname("tent").getEquipmentdescription());

//change
//equipmentRepository.setFixedEquipmentdescriptionFor("change description", 3);
//equipmentRepository.setFixedEquipmentnameFor("equipment", 1);