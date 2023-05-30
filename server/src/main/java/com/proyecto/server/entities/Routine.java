package com.proyecto.server.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "routine")
public class Routine {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int routine_id;

    @Column(length = 50)
    private String title;

    @Column(length = 40)
    private String routine_type;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "routine_exercise",
            joinColumns = @JoinColumn(name = "fk_routine_id"),
            inverseJoinColumns = @JoinColumn(name = "fk_exercise_id"))
    private Set<Exercise> exercise = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany(mappedBy = "routines")
    private Set<UserPlan> userPlans = new HashSet<>();

    public Routine() {
    }

    public Routine(String title, String routine_type) {
        this.title = title;
        this.routine_type = routine_type;
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

    public String getRoutine_type() {
        return routine_type;
    }

    public void setRoutine_type(String routine_type) {
        this.routine_type = routine_type;
    }

    public Set<Exercise> getExercises() {
        return exercise;
    }

    public void setExercises(Set<Exercise> exercises) {
        this.exercise = exercises;
    }

    public Set<Exercise> getExercise() {
        return exercise;
    }

    public void setExercise(Set<Exercise> exercise) {
        this.exercise = exercise;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    
    public Set<UserPlan> getUserPlans() {
        return userPlans;
    }

    public void setUserPlans(Set<UserPlan> userPlans) {
        this.userPlans = userPlans;
    }

    @Override
    public String toString() {
        return "Routine [routine_id=" + routine_id + ", title=" + title + ", routine_type=" + routine_type
                + ", exercise=" + exercise + "]";
    }
}
