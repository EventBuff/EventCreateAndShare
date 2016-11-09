package com.BackEnd.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
/**
 * Created by yanli on 10/30/16.
 */
@Entity
public class UserEvent {
    @Id
    @Column(nullable = false)
    private Integer eventid;

    @Column(nullable = false)
    private Integer participantid;

    public UserEvent(){}

    public UserEvent(Integer eventid, Integer participantid){
        this.eventid = eventid;
        this.participantid = participantid;
    }

    public Integer getEventid() {
        return eventid;
    }

    public void setEventid(Integer eventid) {
        this.eventid = eventid;
    }

    public Integer getParticipantid() {
        return participantid;
    }

    public void setParticipantid(Integer participantid) {
        this.participantid = participantid;
    }
}
