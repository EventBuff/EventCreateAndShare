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
public interface EventEquipmentRepository extends JpaRepository<EventEquipment, Integer> {
   ///query
    List<EventEquipment> findByEventid(Integer eventid);
    List<EventEquipment> findByEquipmentid(Integer equipmentid);
    EventEquipment findByEventidAndEquipmentid(Integer eventid, Integer equipmentid);

    //delete
    //eventid
    @Modifying
    @Transactional
    @Query(value="delete from EventEquipment ee where ee.eventid = ?1")
    void deleteByEventid(Integer eventid);

    //equipmentid
    @Modifying
    @Transactional
    @Query(value="delete from EventEquipment ee where ee.equipmentid = ?1")
    void deleteByEquipmentid(Integer equipmentid);

    //delete
    @Modifying
    @Transactional
    @Query(value="delete from EventEquipment ee where ee.eventid = ?1 and ee.equipmentid = ?2")
    void deleteByEventidAndEquipmentid(Integer eventid, Integer equipmentid);
}

//insert
//eventEquipmentRepository.save(new com.SpringBootTest.domain.EventEquipment(12, 21));
//eventEquipmentRepository.save(new com.SpringBootTest.domain.EventEquipment(13, 22));
//eventEquipmentRepository.save(new com.SpringBootTest.domain.EventEquipment(14, 23));

//query
//System.out.println(eventEquipmentRepository.findByEventid(12));
//System.out.println(eventEquipmentRepository.findByEquipmentid(22));
//System.out.println(eventEquipmentRepository.findByEventidAndEquipmentid(14,23).getEventid());

//delete
//eventEquipmentRepository.deleteByEventidAndEquipmentid(12, 21);