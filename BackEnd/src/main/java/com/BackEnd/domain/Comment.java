package com.BackEnd.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by yanli on 10/29/16.
 */
@Entity
public class Comment {
    @Id
    @GeneratedValue
    private Integer commentid;

    @Column(nullable = false)
    private Integer userid;

    @Column(nullable = false)
    private Integer eventid;

    @Column(nullable = false)
    private String comment;

    public Comment() {
    }

    public Comment(Integer userid, Integer eventid, String comment) {
        this.userid = userid;
        this.eventid = eventid;
        this.comment = comment;
    }

    public Integer getCommentid() {
        return commentid;
    }

    public void setCommentid(Integer commentid) {
        this.commentid = commentid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getEventid() {
        return eventid;
    }

    public void setEventid(Integer eventid) {
        this.eventid = eventid;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String toString(){
        return this.comment + " " + this.userid.toString();
    }
}