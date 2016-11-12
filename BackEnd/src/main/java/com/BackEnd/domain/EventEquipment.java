package com.BackEnd.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
/**
 * Created by yanli on 10/30/16.
 */
@Entity
public class EventEquipment {
    @Id
    @GeneratedValue
    private Integer eventequipmentid;

    @Column(nullable = false)
    private Integer eventid;

    @Column(nullable = false)
    private Integer equipmentid;

    public EventEquipment(){}

    public EventEquipment(Integer eventid, Integer equipmentid){
        this.eventid = eventid;
        this.equipmentid = equipmentid;
    }

    public Integer getEventequipmentid() {
        return eventequipmentid;
    }

    public void setEventequipmentid(Integer eventequipmentid) {
        this.eventequipmentid = eventequipmentid;
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
