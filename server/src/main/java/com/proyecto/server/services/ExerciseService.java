package com.proyecto.server.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.server.entities.Exercise;
import com.proyecto.server.repository.ExerciseRepository;

public class ExerciseService {
    
    @Autowired
    ExerciseRepository exerciseRepository;

    public void save(Exercise exercise) {
        exerciseRepository.save(exercise);
    }
}
