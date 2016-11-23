package com.BackEnd.entity;

/**
 * Created by yanli on 11/23/16.
 */
public class CheckProfile {
    private final String email;
    private final String username;
    private final String phonenumber;
    private final Boolean isadmin;
    private final Boolean isdelete;
    private final String firstname;
    private final String lastname;
    private final String location;
    private final String gender;
    private final String description;

    public  CheckProfile(String email, String username, String phonenumber, Boolean isadmin, Boolean isdelete,
                         String firstname, String lastname, String location, String gender, String description){
        this.email = email;
        this.username = username;
        this.phonenumber = phonenumber;
        this.isadmin = isadmin;
        this.isdelete = isdelete;
        this.firstname = firstname;
        this.lastname = lastname;
        this.location = location;
        this.gender = gender;
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public Boolean getIsadmin() {
        return isadmin;
    }

    public Boolean getIsdelete() {
        return isdelete;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getLocation() {
        return location;
    }

    public String getGender() {
        return gender;
    }

    public String getDescription() {
        return description;
    }
}
