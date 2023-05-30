package com.proyecto.server.runner;

import java.util.Set;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.proyecto.server.entities.Exercise;
//import com.proyecto.server.entities.Recipe;
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

        Routine bicepsTriceps = new Routine("Biceps and Triceps", "Upper body");
        Routine legDay = new Routine("Leg Day", "Legs");
        //Routine cardio = new Routine("Cardio", "Cardio");

        Exercise curlBiceps = new Exercise("Curl Biceps", "Curl biceps description");
        Exercise benchPress = new Exercise("Bench press", "Bench press description");
        Exercise backSquat = new Exercise("Back Squat", "Back Squat description");
        Exercise airBike = new Exercise("Air Bike 25 cal", "Air Bike 25 cal");
        //Exercise run = new Exercise("500m run", "500m run");

        //Recipe bananaSmoothie = new Recipe("Banana Smoothie", "Banana smoothie recipe", "1 Banana, 1/2 orange, 300ml milk");

        Set<Exercise> exercises = new HashSet<>();
        exercises.add(curlBiceps);
        exercises.add(benchPress);
        bicepsTriceps.setExercises(exercises);

        routineService.save(bicepsTriceps);

        exercises.clear();
        exercises.add(backSquat);
        exercises.add(airBike);
        legDay.setExercises(exercises);

        routineService.save(legDay);
    }
}
