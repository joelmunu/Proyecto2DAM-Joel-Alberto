package com.proyecto.server.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "routine")
public class Routine {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int routine_id;

    @Column(length = 50)
    private String title;

    public Routine() {
    }

    public Routine(String title) {
        this.title = title;
    }

    public int getRoutine_id() {
        return routine_id;
    }

    public void setRoutine_id(int routine_id) {
        this.routine_id = routine_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Routine [routine_id=" + routine_id + ", title=" + title + "]";
    }
}
