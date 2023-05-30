package com.proyecto.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.server.entities.User;

public interface UserRepository extends JpaRepository <User, Integer>{
    
    @Query(value = "SELECT PASSWORD FROM fitnessapp.user WHERE username = ?", nativeQuery = true)
    String findPasswordByUsername(String username);

    @Query(value = "SELECT COUNT(*) FROM user where username = ?", nativeQuery = true)
    Integer checkUsername(String username);

    @Query(value = "SELECT * FROM user WHERE user_id = ?", nativeQuery = true)
    User findUserById(int id);

    @Query(value = "SELECT * FROM fitnessapp.user WHERE username = ?", nativeQuery = true)
    User finduserByUsername(String username);
}
