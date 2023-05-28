package com.proyecto.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.server.entities.User;

public interface UserRepository extends JpaRepository <User, Integer>{
    
    @Query(value = "SELECT PASSWORD FROM fitnessapp.user WHERE username = ?", nativeQuery = true)
    String findPasswordByUsername(String username);
}
