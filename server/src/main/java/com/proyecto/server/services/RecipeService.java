package com.proyecto.server.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.server.entities.Recipe;
import com.proyecto.server.repository.RecipeRepository;
import com.proyecto.server.repository.UserRepository;

@Service
public class RecipeService {
    
    @Autowired
    RecipeRepository recipeRepository;

    @Autowired
    UserRepository userRepository;

    public void save(Recipe recipe) {
        recipeRepository.save(recipe);
    }

    public Set<Recipe> findRecipeByUserId(int id) {
        return recipeRepository.findRecipesByUserId(id);
    }

    public Recipe addRecipe(String name, String description, String ingredients, int id) {
        
        Recipe recipe = new Recipe(name, description, ingredients);
        recipe.setUser(userRepository.findUserById(id));
        recipeRepository.save(recipe);
        
        return recipe;
    }

    public Recipe findRecipeByName(String name) {
        return recipeRepository.findRecipeByName(name);
    }
}
