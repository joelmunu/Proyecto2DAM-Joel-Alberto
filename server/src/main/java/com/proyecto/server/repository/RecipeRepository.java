package com.proyecto.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.server.entities.Recipe;

public interface RecipeRepository extends JpaRepository <Recipe, Integer>{
    
}
