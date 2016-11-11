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
public interface UserEventRepository extends JpaRepository<UserEvent, Integer> {
    //query
    List<UserEvent> findByEventid(Integer eventid);
    List<UserEvent> findByParticipantid(Integer participantid);
    UserEvent findByEventidAndParticipantid(Integer eventid, Integer participantid);

    //delete
    //eventid
    @Modifying
    @Transactional
    @Query(value="delete from UserEvent ue where ue.eventid = ?1")
    void deleteByEventid(Integer eventid);

    //participantid
    @Modifying
    @Transactional
    @Query(value="delete from UserEvent ue where ue.participantid = ?1")
    void deleteByParticipantid(Integer participantid);

    //delete
    @Modifying
    @Transactional
    @Query(value="delete from UserEvent ue where ue.eventid = ?1 and ue.participantid = ?2")
    void deleteByEventidAndParticipantid(Integer eventid, Integer participantid);

}

//insert
//userEventRepository.save(new com.SpringBootTest.domain.UserEvent(12, 21));
//userEventRepository.save(new com.SpringBootTest.domain.UserEvent(13, 22));
//userEventRepository.save(new com.SpringBootTest.domain.UserEvent(14, 23));

//query
//System.out.println(userEventRepository.findByEventid(12));
//System.out.println(userEventRepository.findByParticipantid(22));
//System.out.println(userEventRepository.findByEventidAndParticipantid(14,23).getEventid());

//delete
//userEventRepository.deleteByEventidAndParticipantid(12, 21);