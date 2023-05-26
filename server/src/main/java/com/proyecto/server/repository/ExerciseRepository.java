package com.proyecto.server.repository;

import com.proyecto.server.entities.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ExerciseRepository extends JpaRepository<Exercise, Integer>{
    
}
