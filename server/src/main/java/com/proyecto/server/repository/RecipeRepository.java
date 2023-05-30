package com.proyecto.server.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.proyecto.server.entities.Recipe;

public interface RecipeRepository extends JpaRepository <Recipe, Integer>{

    @Query(value = "SELECT * FROM recipe WHERE user_id = ?", nativeQuery = true)
    Set<Recipe> findRecipesByUserId(int id);

    @Query(value = "SELECT * FROM fitnessapp.recipe WHERE name = ? LIMIT 1", nativeQuery = true)
    Recipe findRecipeByName(String name);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM recipe WHERE recipe_id = ?", nativeQuery = true)
    int deleteRecipeById(int id);

    @Query(value = "SELECT * FROM recipe", nativeQuery = true)
    Set<Recipe> getAllRecipes();
}
