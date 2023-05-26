package com.proyecto.server.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.proyecto.server.entities.User;
import com.proyecto.server.repository.UserRepository;

public class UserService {

    @Autowired
    UserRepository userRepository;

    public void save(User user) {
        userRepository.save(user);
    }
}
