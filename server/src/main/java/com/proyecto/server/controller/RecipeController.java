package com.proyecto.server.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.server.entities.Recipe;
import com.proyecto.server.services.RecipeService;

@RestController
public class RecipeController {
    
    @Autowired
    RecipeService recipeService;

    @GetMapping("/recipes/{id}")
    public ResponseEntity<Set<Recipe>> findRecipeByUserId(@PathVariable int id) {
        Set<Recipe> recipes = recipeService.findRecipeByUserId(id);
        return new ResponseEntity<Set<Recipe>>(recipes, HttpStatus.OK);
    }
}
