package com.proyecto.server.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.server.entities.Exercise;
import com.proyecto.server.repository.ExerciseRepository;

@Service
public class ExerciseService {
    
    @Autowired
    ExerciseRepository exerciseRepository;

    public void save(Exercise exercise) {
        exerciseRepository.save(exercise);
    }

    public Set<Exercise> getExercises() {
        return exerciseRepository.getExercises();
    }
}
