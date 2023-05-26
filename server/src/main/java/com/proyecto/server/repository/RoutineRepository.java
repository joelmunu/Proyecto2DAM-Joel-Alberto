package com.proyecto.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.server.entities.Routine;

public interface RoutineRepository extends JpaRepository <Routine, Integer>{
    
}
