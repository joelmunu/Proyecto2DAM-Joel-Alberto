package com.proyecto.server.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

    @DeleteMapping("/deleteroutine/{id}")
    public ResponseEntity<String> deleteRoutineById(@PathVariable int id) {
        int succesfull = routineService.deleteRoutineById(id);

        String result = "";

        if (succesfull == 1) {
            result = "The routine with id " + id + " was successfully deleted";
        } else {
            result = "The routine with id " + id + " can't be deleted";
        }

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
