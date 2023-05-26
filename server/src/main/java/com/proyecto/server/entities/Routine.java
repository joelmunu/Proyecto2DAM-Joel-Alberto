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
@Table(name = "routine")
public class Routine {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int routine_id;

    @Column(length = 50)
    private String title;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "rutine_exercise",
            joinColumns = @JoinColumn(name = "rutine_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id"))
    private Set<Exercise> exercises = new HashSet<>();

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
