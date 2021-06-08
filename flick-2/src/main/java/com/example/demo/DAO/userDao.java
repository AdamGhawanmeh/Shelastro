package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.user;

//selects email and password from mysql server for login
public interface userDao extends JpaRepository<user,Integer>{

	@Query("select a from user a where a.email=:email and a.password=:password")
	public user login(@Param("email") String email, @Param("password") String password);
	
}
