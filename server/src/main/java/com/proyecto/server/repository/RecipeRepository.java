package com.proyecto.server.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyecto.server.entities.Recipe;

public interface RecipeRepository extends JpaRepository <Recipe, Integer>{

    @Query(value = "SELECT * FROM recipe WHERE user_id = ?", nativeQuery = true)
    Set<Recipe> findRecipesByUserId(int id);
}
