package com.proyecto.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.server.entities.Routine;
import com.proyecto.server.repository.RoutineRepository;

@Service
public class RoutineService {
    
    @Autowired
    RoutineRepository routineRepository;

    public void save(Routine routine) {
        routineRepository.save(routine);
    }
}
