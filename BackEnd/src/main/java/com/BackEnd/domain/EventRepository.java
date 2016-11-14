package com.BackEnd.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;
import java.sql.Date;


/**
 * Created by yanli on 10/30/16.
 */
public interface EventRepository extends JpaRepository<Event, Integer> {
    //query_analysis
    Event findByEventid(Integer eventid);
    Event findByEventtitle(String eventtitle);
    List<Event> findByEventtag(String eventtag);
    List<Event> findByCreatorid(Integer creatorid);

    //change
    //eventtitle
    @Modifying
    @Transactional
    @Query("update Event eve set eve.eventtitle = ?1 where eve.eventid = ?2")
    int setFixedEventtitleFor(@Param("eventtitle") String eventtitle , @Param("eventid") Integer eventid);

    //starttime
    @Modifying
    @Transactional
    @Query("update Event eve set eve.starttime = ?1 where eve.eventid = ?2")
    int setFixedStarttimeFor(@Param("starttime") Date starttime , @Param("eventid") Integer eventid);

    //endtime
    @Modifying
    @Transactional
    @Query("update Event eve set eve.endtime = ?1 where eve.eventid = ?2")
    int setFixedEndtimeFor(@Param("endtime") Date endtime , @Param("eventid") Integer eventid);

    //eventdescription
    @Modifying
    @Transactional
    @Query("update Event eve set eve.eventdescription = ?1 where eve.eventid = ?2")
    int setFixedEventdescriptionFor(@Param("eventdescription") String eventdescription , @Param("eventid") Integer eventid);

    //eventtag
    @Modifying
    @Transactional
    @Query("update Event eve set eve.eventtag = ?1 where eve.eventid = ?2")
    int setFixedEventtagFor(@Param("eventtag") String eventtag , @Param("eventid") Integer eventid);

    //isclose
    @Modifying
    @Transactional
    @Query("update Event eve set eve.isclose = ?1 where eve.eventid = ?2")
    int setFixedIscloseFor(@Param("isclose") Boolean isclose , @Param("eventid") Integer eventid);

    //closereason
    @Modifying
    @Transactional
    @Query("update Event eve set eve.closereason = ?1 where eve.eventid = ?2")
    int setFixedClosereasonFor(@Param("closereason") String closereason , @Param("eventid") Integer eventid);

    //nownum
    @Modifying
    @Transactional
    @Query("update Event eve set eve.closereason = ?1 where eve.eventid = ?2")
    int setFixedNownumFor(@Param("nownum") Integer nownum , @Param("eventid") Integer eventid);
    //insert: save

    //delete: delete
}

//insert
//String startTime = "2016-02-02 22:11:11";
//Timestamp myStartTime = Timestamp.valueOf(startTime);
//String endTime = "2016-03-02 12:22:22";
//Timestamp myEndTime = Timestamp.valueOf(endTime);
//eventRepository.save(new com.SpringBootTest.domain.Event("Hiking",  myStartTime, myEndTime,
//        "Hiking in Boulder", 5, 1, "travel"));
//eventRepository.save(new com.SpringBootTest.domain.Event("Climbing",  myStartTime, myEndTime,
//       "Climbing in Boulder", 2, 3, "climbing"));
//eventRepository.save(new com.SpringBootTest.domain.Event("Study",  myStartTime, myEndTime,
//       "Study in Boulder", 4, 6, "study"));

//query
//System.out.println(eventRepository.findByEventid(8).getEventdescription());
//System.out.println(eventRepository.findByEventtitle("Study").getEventdescription());
//System.out.println(eventRepository.findByEventtag("climbing"));

//eventRepository.setFixedEventdescriptionFor("change the description", 8);