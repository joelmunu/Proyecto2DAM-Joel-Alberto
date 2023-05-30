package com.proyecto.server.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "recipe")
public class Recipe {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recipe_id;

    @Column(length = 50)
    private String name;

    @Column
    private String description;

    @Column
    private String ingredients;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "recipes")
    private Set<UserPlan> userPlans = new HashSet<>();

    public Recipe() {
    }

    public Recipe(String name, String description, String ingredients) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    // public Set<UserPlan> getUserPlans() {
    //     return userPlans;
    // }

    // public void setUserPlans(Set<UserPlan> userPlans) {
    //     this.userPlans = userPlans;
    // }

    @Override
    public String toString() {
        return "Recipe [recipe_id=" + recipe_id + ", name=" + name + ", description=" + description + ", ingredients="
                + ingredients + "]";
    }
}