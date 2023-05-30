package com.proyecto.server.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.server.entities.Routine;

public interface RoutineRepository extends JpaRepository <Routine, Integer>{
    
    @Query(value = "SELECT * FROM routine", nativeQuery = true)
    Set<Routine> getRoutines();
}
