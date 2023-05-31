package com.proyecto.server.request;

import java.util.List;

public class CreateRoutineRequest {
    private String title;
    private String routine_type;
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
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
}
