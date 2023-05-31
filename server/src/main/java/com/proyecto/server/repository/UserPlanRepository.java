package com.proyecto.server.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.server.entities.UserPlan;

public interface UserPlanRepository extends JpaRepository <UserPlan, Integer>{
    
    @Query(value="SELECT * FROM fitnessapp.user_plan where user_id = ?", nativeQuery = true)
    Set<UserPlan> getPlansUser(int id);
}
