package com.proyecto.server.runner;

import java.util.Set;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.proyecto.server.entities.Exercise;
import com.proyecto.server.entities.Routine;
import com.proyecto.server.entities.User;
import com.proyecto.server.services.ExerciseService;
import com.proyecto.server.services.RoutineService;
import com.proyecto.server.services.UserService;

@Component
public class InitDatabase implements CommandLineRunner{

    @Autowired
    UserService userService;

    @Autowired
    RoutineService routineService;

    @Autowired
    ExerciseService exerciseService;

    @Override
    public void run(String... args) throws Exception {
        User user = new User("Goyo", "Poyo", 1.70f, 89.0f, 45, "male", "1234", 122, 122, 122);
        userService.save(user);

        Routine routine = new Routine("Biceps and Triceps", "Upper body");
        Exercise exercise = new Exercise("Curl Biceps", "Curl biceps description");
        Exercise exercise2 = new Exercise("Bench press", "Bench press description");

        Set<Exercise> exercises = new HashSet<>();
        exercises.add(exercise);
        exercises.add(exercise2);
        routine.setExercises(exercises);

        Set<Routine> routines = new HashSet<>();
        routines.add(routine);
        exercise.setRoutine(routines);

        routineService.save(routine);
        exerciseService.save(exercise);
    }
}
