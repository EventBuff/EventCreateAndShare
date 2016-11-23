package com.BackEnd.entity;

import com.BackEnd.domain.Event;

import java.util.List;

/**
 * Created by yanli on 11/11/16.
 */
public class EventDetail {
    private final Event event;
    private final String creatorname;
    private final List<String> equipmentname;

    public EventDetail(Event event, String creatorname, List<String> equipmentname) {
        this.event = event;
        this.creatorname = creatorname;
        this.equipmentname = equipmentname;
    }

    public Event getEvent() {
        return event;
    }

    public String getCreatorname() {
        return creatorname;
    }

    public List<String> getEquipmentname() {
        return equipmentname;
    }
}
