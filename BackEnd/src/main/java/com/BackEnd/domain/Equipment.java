package com.BackEnd.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
/**
 * Created by yanli on 10/30/16.
 */
@Entity
public class Equipment {
    @Id
    @GeneratedValue
    private Integer equipmentid;

    @Column()
    private String equipmentdescription;

    @Column(nullable = false)
    private String equipmentname;

    public Equipment(){}

    public Equipment(String equipmentdescription, String equipmentname){
        this.equipmentdescription = equipmentdescription;
        this.equipmentname = equipmentname;
    }
    public Equipment(String equipmentname){
        this.equipmentname = equipmentname;
    }

    public Integer getEquipmentid() {
        return equipmentid;
    }

    public void setEquipmentid(Integer equipmentid) {
        this.equipmentid = equipmentid;
    }

    public String getEquipmentdescription() {
        return equipmentdescription;
    }

    public void setEquipmentdescription(String equipmentdescription) {
        this.equipmentdescription = equipmentdescription;
    }

    public String getEquipmentname() {
        return equipmentname;
    }

    public void setEquipmentname(String equipmentname) {
        this.equipmentname = equipmentname;
    }
}
