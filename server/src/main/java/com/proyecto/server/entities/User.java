package com.proyecto.server.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @Column(length = 40)
    private String username;

    @Column(length = 65)
    private String fullname;

    @Column
    private Float height;

    @Column
    private Float weight;

    @Column
    private int age;

    @Column(length = 10)
    private String gender;

    @Column
    private String password;

    @Column
    private int pr_backSquat;

    @Column
    private int pr_benchPress;

    @Column
    private int pr_deadLift;

    public User() {
    }

    public User(String username, String fullname, Float height, Float weight, int age, String gender, String password,
            int pr_backSquat, int pr_benchPress, int pr_deadLift) {
        this.username = username;
        this.fullname = fullname;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.gender = gender;
        this.password = password;
        this.pr_backSquat = pr_backSquat;
        this.pr_benchPress = pr_benchPress;
        this.pr_deadLift = pr_deadLift;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public Float getHeight() {
        return height;
    }

    public void setHeight(Float height) {
        this.height = height;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getPr_backSquat() {
        return pr_backSquat;
    }

    public void setPr_backSquat(int pr_backSquat) {
        this.pr_backSquat = pr_backSquat;
    }

    public int getPr_benchPress() {
        return pr_benchPress;
    }

    public void setPr_benchPress(int pr_benchPress) {
        this.pr_benchPress = pr_benchPress;
    }

    public int getPr_deadLift() {
        return pr_deadLift;
    }

    public void setPr_deadLift(int pr_deadLift) {
        this.pr_deadLift = pr_deadLift;
    }

    @Override
    public String toString() {
        return "User [user_id=" + user_id + ", username=" + username + ", fullname=" + fullname + ", height=" + height
                + ", weight=" + weight + ", age=" + age + ", gender=" + gender + ", password=" + password
                + ", pr_backSquat=" + pr_backSquat + ", pr_benchPress=" + pr_benchPress + ", pr_deadLift=" + pr_deadLift
                + "]";
    }
}
