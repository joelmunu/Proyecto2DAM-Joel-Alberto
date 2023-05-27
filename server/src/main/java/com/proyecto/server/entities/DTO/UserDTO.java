package com.proyecto.server.entities.DTO;

public class UserDTO {

    private String username;
    private String fullname;
    private Float height;
    private Float weight;
    private int pr_backSquat;
    private int pr_benchPress;
    private int pr_deadLift;

    public UserDTO() {
    }

    public UserDTO(String username, String fullname, Float height, Float weight, int pr_backSquat, int pr_benchPress,
            int pr_deadLift) {
        this.username = username;
        this.fullname = fullname;
        this.height = height;
        this.weight = weight;
        this.pr_backSquat = pr_backSquat;
        this.pr_benchPress = pr_benchPress;
        this.pr_deadLift = pr_deadLift;
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
}
