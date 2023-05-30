package com.proyecto.server.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.server.entities.Exercise;
import com.proyecto.server.services.ExerciseService;

@RestController
public class ExerciseController {
    
    @Autowired
    ExerciseService exerciseService;

    @GetMapping("/exercises")
    public ResponseEntity<Set<Exercise>> getExercises() {
        Set<Exercise> exercises = exerciseService.getExercises();
        return new ResponseEntity<>(exercises, HttpStatus.OK);
    }
}
