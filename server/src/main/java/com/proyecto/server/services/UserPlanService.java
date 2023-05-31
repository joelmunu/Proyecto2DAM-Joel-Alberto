package com.proyecto.server.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.server.entities.Recipe;
import com.proyecto.server.entities.Routine;
import com.proyecto.server.entities.UserPlan;
import com.proyecto.server.repository.UserPlanRepository;
import com.proyecto.server.repository.UserRepository;

@Service
public class UserPlanService {
    
    @Autowired
    UserPlanRepository userPlanRepository;

    @Autowired
    RoutineService routineService;

    @Autowired
    RecipeService recipeService;

    @Autowired
    UserRepository userRepository;

    public void save(UserPlan userPlan) {
        userPlanRepository.save(userPlan);
    }

    public UserPlan addUserPlan(String name, int user_id, List<String> routineNames, List<String> recipeNames) {
        Set<Routine> routines = new HashSet<>();

        for (int index = 0; index < routineNames.size(); index++) {
            routines.add(routineService.findRoutineByName(routineNames.get(index)));
        }

        Set<Recipe> recipes = new HashSet<>();

        for (int i = 0; i < recipeNames.size(); i++) {
            recipes.add(recipeService.findRecipeByName(recipeNames.get(i)));
        }

        UserPlan userPlan = new UserPlan(name);
        userPlan.setRoutines(routines);
        userPlan.setRecipes(recipes);
        userPlan.setUser(userRepository.findUserById(user_id));

        userPlanRepository.save(userPlan);

        return userPlan;
    }

    public Set<UserPlan> getPlansUser(int id) {
        return userPlanRepository.getPlansUser(id);
    }
}
