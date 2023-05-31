package com.proyecto.server.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.proyecto.server.entities.Routine;

public interface RoutineRepository extends JpaRepository <Routine, Integer>{
    
    @Query(value = "SELECT * FROM routine", nativeQuery = true)
    Set<Routine> getRoutines();

    @Query(value = "SELECT * FROM fitnessapp.routine WHERE title = ? LIMIT 1", nativeQuery = true)
    Routine findRoutineByName(String title);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM routine WHERE routine_id = ?", nativeQuery = true)
    int deleteRoutineById(int id);

    @Query(value = "SELECT * FROM fitnessapp.routine where user_id = ?", nativeQuery = true)
    Set<Routine> getRoutinesUser(int id);
}
