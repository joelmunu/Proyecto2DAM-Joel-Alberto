package com.proyecto.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.server.entities.UserPlan;
import com.proyecto.server.request.CreateUserPlanRequest;
import com.proyecto.server.services.UserPlanService;

@RestController
public class UserPlanController {

    @Autowired
    UserPlanService userPlanService;
    
    @PostMapping("/adduserplan")
    public ResponseEntity<?> addUserPlan(@RequestBody CreateUserPlanRequest request) {
        UserPlan userPlan = userPlanService.addUserPlan(request.getName(), request.getUser_id(), request.getRoutineNames(), request.getRecipeNames());
        System.out.println(request.getRoutineNames());
        System.out.println(request.getRecipeNames());
        return new ResponseEntity<>(userPlan, HttpStatus.OK);
    }

}
