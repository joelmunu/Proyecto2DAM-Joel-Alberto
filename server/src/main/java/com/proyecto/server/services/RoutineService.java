package com.proyecto.server.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.server.entities.Routine;
import com.proyecto.server.repository.RoutineRepository;

public class RoutineService {
    
    @Autowired
    RoutineRepository routineRepository;

    public void save(Routine routine) {
        routineRepository.save(routine);
    }
}
