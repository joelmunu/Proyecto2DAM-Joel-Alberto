package com.proyecto.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.server.entities.UserPlan;

public interface UserPlanRepository extends JpaRepository <UserPlan, Integer>{
    
}
