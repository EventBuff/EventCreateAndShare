package com.BackEnd.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;

/**
 * Created by lich on 10/24/16.
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    //query_analysis
    User findByEmail(String email);
    User findByUsername(String username);
    User findByUserid(Integer userid);

    //change
    //username
    @Modifying
    @Transactional
    @Query("update User u set u.username = ?1 where u.userid = ?2")
    int setFixedUsernameFor(@Param("username") String username ,@Param("userid") Integer userid);

    //password
    @Modifying
    @Transactional
    @Query("update User u set u.password = ?1 where u.userid = ?2")
    int setFixedPasswordFor(@Param("password") String password ,@Param("userid") Integer userid);

    //phonenumber
    @Modifying
    @Transactional
    @Query("update User u set u.phonenumber = ?1 where u.userid = ?2")
    int setFixedPhonenumberFor(@Param("phonenumber") String phonenumber ,@Param("userid") Integer userid);

    //isadmin
    @Modifying
    @Transactional
    @Query("update User u set u.isadmin = ?1 where u.userid = ?2")
    int setFixedIsadminFor(@Param("isadmin") Boolean isadmin ,@Param("userid") Integer userid);

    //isdelete
    @Modifying
    @Transactional
    @Query("update User u set u.isdelete = ?1 where u.userid = ?2")
    int setFixedIsdeleteFor(@Param("isdelete") Boolean isdelete ,@Param("userid") Integer userid);

    //email
    @Modifying
    @Transactional
    @Query("update User u set u.email = ?1 where u.userid = ?2")
    int setFixedEmailFor(@Param("email") String email ,@Param("userid") Integer userid);

    //firstname
    @Modifying
    @Transactional
    @Query("update User u set u.firstname = ?1 where u.userid = ?2")
    int setFixedFirstnameFor(@Param("firstname") String firstname ,@Param("userid") Integer userid);

    //lastname
    @Modifying
    @Transactional
    @Query("update User u set u.lastname = ?1 where u.userid = ?2")
    int setFixedLastnameFor(@Param("lastname") String lastname ,@Param("userid") Integer userid);

    //location
    @Modifying
    @Transactional
    @Query("update User u set u.location = ?1 where u.userid = ?2")
    int setFixedLocationFor(@Param("location") String location ,@Param("userid") Integer userid);

    //gender
    @Modifying
    @Transactional
    @Query("update User u set u.gender = ?1 where u.userid = ?2")
    int setFixedGenderFor(@Param("gender") String gender ,@Param("userid") Integer userid);

    //description
    @Modifying
    @Transactional
    @Query("update User u set u.description = ?1 where u.userid = ?2")
    int setFixedDescriptionFor(@Param("description") String description ,@Param("userid") Integer userid);

    //insert: save

    //delete: delete
}

//insert
//userRepository.save(new com.SpringBootTest.domain.User("333@222.com", "AAA", "34556", "123124355", false, false));
//userRepository.save(new com.SpringBootTest.domain.User("111@222.com", "BBB", "66788", "123123455", false, false));
//userRepository.save(new com.SpringBootTest.domain.User("222@222.com", "CCC", "34557", "123124343", false, false));

//delete
//userRepository.delete(4);

//query
//System.out.println(userRepository.findByEmail("111@222.com").getUsername());
//System.out.println(userRepository.findByUsername("CCC").getUsername());
//for (com.SpringBootTest.domain.User user : userRepository.findAll()) {
//    System.out.println(user.getUsername());
//}

//change
//userRepository.setFixedUsernameFor("DDD", 5);
//userRepository.setFixedIsadminFor(true, 5);
//userRepository.setFixedIsdeleteFor(true, 5);
//userRepository.setFixedPhonenumberFor("8888888", 5);