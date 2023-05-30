package com.proyecto.server.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.server.entities.Exercise;
import com.proyecto.server.entities.Routine;
import com.proyecto.server.request.CreateRoutineRequest;
import com.proyecto.server.services.RoutineService;

@RestController
public class RoutineController {
    
    @Autowired
    RoutineService routineService;

    @GetMapping("/routines")
    public ResponseEntity<Set<Routine>> getRoutines() {
        Set<Routine> routines = routineService.getRoutines();
        return new ResponseEntity<Set<Routine>>(routines, HttpStatus.OK);
    }

    @PostMapping("/addroutine")
    public ResponseEntity<?> addRoutine(@RequestBody CreateRoutineRequest request) {
        System.out.println(request.getTitle());
        try {
            Routine newRoutine = routineService.addRoutine(request.getTitle(), request.getRoutine_type(), request.getExercise(), request.getId());
        return new ResponseEntity<Routine>(newRoutine, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
