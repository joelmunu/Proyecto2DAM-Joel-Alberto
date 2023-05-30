package com.proyecto.server.request;

import java.util.List;

public class CreateUserPlanRequest {
    private String name;
    private int user_id;
    private List<String> routineNames;
    private List<String> recipeNames;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    public List<String> getRoutineNames() {
        return routineNames;
    }
    public void setRoutineNames(List<String> routineNames) {
        this.routineNames = routineNames;
    }
    public List<String> getRecipeNames() {
        return recipeNames;
    }
    public void setRecipeNames(List<String> recipes) {
        this.recipeNames = recipes;
    }
}
