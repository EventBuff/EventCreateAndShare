package com.BackEnd.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
/**
 * Created by yanli on 10/30/16.
 */
@Entity
public class EventEquipment {
    @Id
    @Column(nullable = false)
    private Integer eventid;

    @Column(nullable = false)
    private Integer equipmentid;

    public EventEquipment(){}

    public EventEquipment(Integer eventid, Integer equipmentid){
        this.eventid = eventid;
        this.equipmentid = equipmentid;
    }

    public Integer getEventid() {
        return eventid;
    }

    public void setEventid(Integer eventid) {
        this.eventid = eventid;
    }

    public Integer getEquipmentid() {
        return equipmentid;
    }

    public void setEquipmentid(Integer equipmentid) {
        this.equipmentid = equipmentid;
    }
}
