package com.BackEnd.entity;

import com.BackEnd.domain.Event;

/**
 * Created by yanli on 11/11/16.
 */
public class CreateEvent {
    private final Event event;
    private final String equipmentname;

    public CreateEvent(Event event, String equipmentname){
        this.event = event;
        this.equipmentname = equipmentname;
    }

    public Event getEvent() {
        return event;
    }

    public String getEquipmentname() {
        return equipmentname;
    }
}
