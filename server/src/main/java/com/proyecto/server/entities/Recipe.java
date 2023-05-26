package com.proyecto.server.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "recipe")
public class Recipe {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recipe_id;

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String video_id;

    public Recipe() {
    }

    public Recipe(String name, String video_id) {
        this.name = name;
        this.video_id = video_id;
    }

    public int getRecipe_id() {
        return recipe_id;
    }

    public void setRecipe_id(int recipe_id) {
        this.recipe_id = recipe_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVideo_id() {
        return video_id;
    }

    public void setVideo_id(String video_id) {
        this.video_id = video_id;
    }

    @Override
    public String toString() {
        return "Recipe [recipe_id=" + recipe_id + ", name=" + name + ", video_id=" + video_id + "]";
    }
}