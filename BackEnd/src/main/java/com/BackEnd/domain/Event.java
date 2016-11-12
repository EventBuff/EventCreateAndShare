package com.BackEnd.domain;

import com.sun.javafx.beans.IDProperty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Timestamp;

/**
 * Created by yanli on 10/30/16.
 */
@Entity
public class Event {
    @Id
    @GeneratedValue
    private Integer eventid;

    @Column(nullable = false)
    private String eventtitle;

    @Column(nullable = false)
    private Timestamp starttime;

    @Column(nullable = false)
    private Timestamp endtime;

    @Column(nullable = false)
    private String eventdescription;

    @Column(nullable = false)
    private Integer numofpeople;

    @Column(nullable = false)
    private Integer nownum;

    @Column(nullable = false)
    private String eventtag;

    @Column(nullable = false)
    private Integer creatorid;

    @Column(nullable = false)
    private String eventphoto;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false, columnDefinition = "TINYINT", length = 1)
    private Boolean isclose;

    @Column()
    private String closereason;


    public Event(){}

    public Event(String eventtitle, Timestamp starttime, Timestamp endtime,
                 String eventdescription, Integer numofpeople, Integer nownum, String eventtag,
                 Integer creatorid, String eventphoto, String location, Boolean isclose){
        this.eventtitle = eventtitle;
        this.starttime = starttime;
        this.endtime = endtime;
        this.eventdescription = eventdescription;
        this.numofpeople = numofpeople;
        this.nownum = nownum;
        this.eventtag = eventtag;
        this.creatorid = creatorid;
        this.eventphoto = eventphoto;
        this.location = location;
        this.isclose = isclose;
    }

    public Event(String eventtitle, Timestamp starttime, Timestamp endtime,
                 String eventdescription, Integer numofpeople, Integer nownum, String eventtag,
                 Integer creatorid, String eventphoto, String location, Boolean isclose,
                 String closereason){
        this.eventtitle = eventtitle;
        this.starttime = starttime;
        this.endtime = endtime;
        this.eventdescription = eventdescription;
        this.numofpeople = numofpeople;
        this.nownum = nownum;
        this.eventtag = eventtag;
        this.creatorid = creatorid;
        this.eventphoto = eventphoto;
        this.location = location;
        this.isclose = isclose;
        this.closereason = closereason;
    }

    public Integer getEventid() {
        return eventid;
    }

    public void setEventid(Integer eventid) {
        this.eventid = eventid;
    }

    public String getEventtitle() {
        return eventtitle;
    }

    public void setEventtitle(String eventtitle) {
        this.eventtitle = eventtitle;
    }

    public Timestamp getStarttime() {
        return starttime;
    }

    public void setStarttime(Timestamp starttime) {
        this.starttime = starttime;
    }

    public Timestamp getEndtime() {
        return endtime;
    }

    public void setEndtime(Timestamp endtime) {
        this.endtime = endtime;
    }

    public String getEventdescription() {
        return eventdescription;
    }

    public void setEventdescription(String eventdescription) {
        this.eventdescription = eventdescription;
    }

    public Integer getNumofpeople() {
        return numofpeople;
    }

    public void setNumofpeople(Integer numofpeople) {
        this.numofpeople = numofpeople;
    }

    public Integer getNownum() {
        return nownum;
    }

    public void setNownum(Integer nownum) {
        this.nownum = nownum;
    }

    public String getEventtag() {
        return eventtag;
    }

    public void setEventtag(String eventtag) {
        this.eventtag = eventtag;
    }

    public Integer getCreatorid() {
        return creatorid;
    }

    public void setCreatorid(Integer creatorid) {
        this.creatorid = creatorid;
    }

    public String getEventphoto() {
        return eventphoto;
    }

    public void setEventphoto(String eventphoto) {
        this.eventphoto = eventphoto;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Boolean getIsclose() {
        return isclose;
    }

    public void setIsclose(Boolean isclose) {
        this.isclose = isclose;
    }

    public String getClosereason() {
        return closereason;
    }

    public void setClosereason(String closereason) {
        this.closereason = closereason;
    }
}
