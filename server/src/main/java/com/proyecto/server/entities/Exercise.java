package com.proyecto.server.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "exercise")
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int exercise_id;

    @Column(length = 50)
    private String name;

    @Column
    private String description;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    }, mappedBy = "exercise")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Set<Routine> routine = new HashSet<Routine>();

    public Exercise() {
    }

    public Exercise(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public int getExercise_id() {
        return exercise_id;
    }

    public void setExercise_id(int exercise_id) {
        this.exercise_id = exercise_id;
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

    public Set<Routine> getRoutine() {
        return routine;
    }

    public void setRoutine(Set<Routine> routine) {
        this.routine = routine;
    }

    @Override
    public String toString() {
        return "Exercise [exercise_id=" + exercise_id + ", name=" + name + ", description=" + description + ", routine="
                + routine + "]";
    }
}
