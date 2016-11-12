package com.BackEnd.entity;

import com.BackEnd.domain.Event;

/**
 * Created by yanli on 11/11/16.
 */
public class EventDetail {
    private final Event event;
    private final String creatorname;

    public EventDetail(Event event, String creatorname) {
        this.event = event;
        this.creatorname = creatorname;
    }

    public Event getEvent() {
        return event;
    }

    public String getCreatorname() {
        return creatorname;
    }
}
