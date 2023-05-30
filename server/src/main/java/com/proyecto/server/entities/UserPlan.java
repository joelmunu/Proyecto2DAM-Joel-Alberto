package com.proyecto.server.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_plan")
public class UserPlan {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_plan_id;

    @Column(length = 50)
    private String name;

    @ManyToMany
    @JoinTable(
        name = "user_plan_routine",
        joinColumns = @JoinColumn(name = "user_plan_id"),
        inverseJoinColumns = @JoinColumn(name = "routine_id")
    )
    private Set<Routine> routines = new HashSet<>();

    @ManyToMany
    @JoinTable(
        name = "user_plan_recipe",
        joinColumns = @JoinColumn(name = "user_plan_id"),
        inverseJoinColumns = @JoinColumn(name = "recipe_id")
    )
    private Set<Recipe> recipes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public UserPlan() {
    }

    public UserPlan(String name) {
        this.name = name;
    }

    public int getUser_plan_id() {
        return user_plan_id;
    }

    public void setUser_plan_id(int userPlan_id) {
        this.user_plan_id = userPlan_id;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "UserPlan [userPlan_id=" + user_plan_id + ", name=" + name + ", routines=" + routines + ", recipes="
                + recipes + "]";
    }
}
