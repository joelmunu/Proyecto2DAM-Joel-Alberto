package com.proyecto.server.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.server.entities.Exercise;
import com.proyecto.server.entities.Routine;
import com.proyecto.server.repository.RoutineRepository;
import com.proyecto.server.repository.UserRepository;

@Service
public class RoutineService {

    @Autowired
    RoutineRepository routineRepository;

    @Autowired
    ExerciseService exerciseService;

    @Autowired
    UserRepository userRepository;

    public void save(Routine routine) {
        routineRepository.save(routine);
    }

    public Set<Routine> getRoutines() {
        return routineRepository.getRoutines();
    }

    public Routine addRoutine(String title, String routine_type,  int id) {
        try {
            

            Routine routine = new Routine(title, routine_type);

            routine.setUser(userRepository.findUserById(id));
            routineRepository.save(routine);
            return routine;
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    public Routine findRoutineByName(String title) {
        return routineRepository.findRoutineByName(title);
    }

    public int deleteRoutineById(int id) {
        return routineRepository.deleteRoutineById(id);
    }

    public Set<Routine> getRoutinesUser(int id) {
        return routineRepository.getRoutinesUser(id);
    }
}
