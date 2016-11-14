package com.BackEnd.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by lich on 10/24/16.
 */
@Entity
public class User {
    @Id
    @GeneratedValue
    private Integer userid;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column()
    private String phonenumber;

    @Column(columnDefinition = "TINYINT", length = 1)
    private Boolean isadmin;

    @Column(columnDefinition = "TINYINT", length = 1)
    private Boolean isdelete;

    @Column()
    private String firstname;

    @Column()
    private String lastname;

    @Column()
    private String location;

    @Column()
    private String gender;

    @Column()
    private String description;

    public User(){}

    public User(String email, String username, String password, String phonenumber, Boolean isadmin, Boolean isdelete,
                String firstname, String lastname, String location, String gender, String description) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.phonenumber = phonenumber;
        this.isadmin = isadmin;
        this.isdelete = isdelete;
        this.firstname = firstname;
        this.lastname = lastname;
        this.location = location;
        this.gender = gender;
        this.description = description;
    }

     public User(String email, String username, String password){
         this.email = email;
         this.username = username;
         this.password = password;
     }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getIsadmin() {
        return isadmin;
    }

    public void setIsadmin(Boolean isadmin) {
        this.isadmin = isadmin;
    }

    public Boolean getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(Boolean isdelete) {
        this.isdelete = isdelete;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

