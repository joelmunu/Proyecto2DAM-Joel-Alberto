package com.proyecto.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.server.entities.UserPlan;
import com.proyecto.server.repository.UserPlanRepository;

@Service
public class UserPlanService {
    
    @Autowired
    UserPlanRepository userPlanRepository;

    public void save(UserPlan userPlan) {
        userPlanRepository.save(userPlan);
    }
}