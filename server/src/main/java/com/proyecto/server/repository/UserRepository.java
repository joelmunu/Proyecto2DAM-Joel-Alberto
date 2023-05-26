package com.proyecto.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.server.entities.User;

public interface UserRepository extends JpaRepository <User, Integer>{
    
}
