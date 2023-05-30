package com.proyecto.server.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.server.entities.Recipe;
import com.proyecto.server.request.CreateRecipeRequest;
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

    @PostMapping("/addrecipe")
    public ResponseEntity<Recipe> addRecipe(@RequestBody CreateRecipeRequest request) {
        Recipe recipe = recipeService.addRecipe(request.getName(), request.getDescription(), request.getIngredients(), request.getId());
        return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
    }

    @DeleteMapping("/deleterecipe/{id}")
    public ResponseEntity<String> deleteRecipeById(@PathVariable int id) {
        int succesfull = recipeService.deleteRecipeById(id);

        String result = "";

        if (succesfull == 1) {
            result = "The recipe with id " + id + " was successfully deleted";
        } else {
            result = "The recipe with id " + id + " can't be deleted";
        }

        return new ResponseEntity<String>(result, HttpStatus.OK);
    }
}
