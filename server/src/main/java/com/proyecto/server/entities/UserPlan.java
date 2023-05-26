package com.proyecto.server.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user_plan")
public class UserPlan {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userPlan_id;

    @Column(length = 50)
    private String name;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "userPlan_routine",
            joinColumns = @JoinColumn(name = "userPlan_id"),
            inverseJoinColumns = @JoinColumn(name = "routine_id"))
    private Set<Routine> routines = new HashSet<>();

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "userPlan_recipe",
            joinColumns = @JoinColumn(name = "userPlan_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_id"))
    private Set<Recipe> recipes = new HashSet<>();

    public UserPlan() {
    }

    public UserPlan(String name, Set<Routine> routines, Set<Recipe> recipes) {
        this.name = name;
        this.routines = routines;
        this.recipes = recipes;
    }

    public int getUserPlan_id() {
        return userPlan_id;
    }

    public void setUserPlan_id(int userPlan_id) {
        this.userPlan_id = userPlan_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Routine> getRoutines() {
        return routines;
    }

    public void setRoutines(Set<Routine> routines) {
        this.routines = routines;
    }

    public Set<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(Set<Recipe> recipes) {
        this.recipes = recipes;
    }

    @Override
    public String toString() {
        return "UserPlan [userPlan_id=" + userPlan_id + ", name=" + name + ", routines=" + routines + ", recipes="
                + recipes + "]";
    }
}
