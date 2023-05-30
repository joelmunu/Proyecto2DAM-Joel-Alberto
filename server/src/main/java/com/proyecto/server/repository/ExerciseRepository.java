package com.proyecto.server.repository;

import com.proyecto.server.entities.Exercise;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface ExerciseRepository extends JpaRepository<Exercise, Integer>{
    
    @Query(value = "SELECT * FROM exercise", nativeQuery = true)
    Set<Exercise> getExercises();

    @Query(value = "SELECT * FROM fitnessapp.exercise WHERE name = ?", nativeQuery = true)
    Exercise findExerciseByName(String name);
}
