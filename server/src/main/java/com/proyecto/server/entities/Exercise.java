package com.proyecto.server.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "exercise")
public class Exercise {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int exercise_id;

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String video_id;

    public Exercise() {
    }

    public Exercise(String name, String video_id) {
        this.name = name;
        this.video_id = video_id;
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

    public String getVideo_id() {
        return video_id;
    }

    public void setVideo_id(String video_id) {
        this.video_id = video_id;
    }

    @Override
    public String toString() {
        return "Exercise [exercise_id=" + exercise_id + ", name=" + name + ", video_id=" + video_id + "]";
    }
}
