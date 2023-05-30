package com.proyecto.server.request;

import java.util.List;

public class CreateRoutineRequest {
    private String title;
    private String routine_type;
    private List<String> exercise;
    private int id;

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getRoutine_type() {
        return routine_type;
    }
    public void setRoutine_type(String routineType) {
        this.routine_type = routineType;
    }
    public List<String> getExercise() {
        return exercise;
    }
    public void setExercise(List<String> exercises) {
        this.exercise = exercises;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
}
