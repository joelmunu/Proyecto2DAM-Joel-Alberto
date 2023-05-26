package com.proyecto.server.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.server.entities.Recipe;
import com.proyecto.server.repository.RecipeRepository;

public class RecipeService {
    
    @Autowired
    RecipeRepository recipeRepository;

    public void save(Recipe recipe) {
        recipeRepository.save(recipe);
    }
}
