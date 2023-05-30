package com.proyecto.server.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.server.entities.Routine;
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
}
