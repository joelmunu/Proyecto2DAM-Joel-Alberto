package com.proyecto.server.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.server.entities.Recipe;
import com.proyecto.server.repository.RecipeRepository;

@Service
public class RecipeService {
    
    @Autowired
    RecipeRepository recipeRepository;

    public void save(Recipe recipe) {
        recipeRepository.save(recipe);
    }

    public Set<Recipe> findRecipeByUserId(int id) {
        return recipeRepository.findRecipesByUserId(id);
    }
}
