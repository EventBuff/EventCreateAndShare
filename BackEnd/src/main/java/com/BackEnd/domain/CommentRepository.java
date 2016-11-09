package com.BackEnd.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;

//import javax.persistence.criteria.CriteriaBuilder;

/**
 * Created by yanli on 10/29/16.
 */
public interface CommentRepository extends JpaRepository<Comment, Integer> {

    //query_analysis
    List<Comment> findByUserid(Integer userid);
    List<Comment> findByEventid(Integer eventid);
    Comment findByUseridAndEventid(Integer userid, Integer eventid);

    //change
    @Modifying
    @Transactional
    @Query("update Comment com set com.comment = ?1 where com.commentid = ?2")
    int setFixedCommentFor(@Param("comment") String comment ,@Param("commentid") Integer commentid);

    //insert: save

    //delete: delete
    @Modifying
    @Transactional
    @Query(value="delete from Comment c where c.userid = ?1")
    void deleteByUserid(Integer userid);

    @Modifying
    @Transactional
    @Query(value="delete from Comment c where c.eventid = ?1")
    void deleteByEventid(Integer eventid);
}


//insert
//commentRepository.save(new com.SpringBootTest.domain.Comment(3, 2, "command1"));

//delete
//commentRepository.deleteByEventid(5);

//query
//System.out.println(commentRepository.findByEventid(7));

//change
//commentRepository.setFixedCommentFor("hhh", 7);

