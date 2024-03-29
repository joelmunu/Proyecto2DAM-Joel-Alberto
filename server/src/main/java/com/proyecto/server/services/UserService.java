package com.proyecto.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.server.entities.User;
import com.proyecto.server.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void save(User user) {
        userRepository.save(user);
    }

    public String findPasswordByUsername(String username) {
        String pass = userRepository.findPasswordByUsername(username);
        System.out.println(pass);
        return pass;
    }

    public Integer checkUsername(String username) {
        return userRepository.checkUsername(username);
    }

    public User findUserById(int id) {
        return userRepository.findUserById(id);
    }

    public User findUserByUserName(String username) {
        return userRepository.finduserByUsername(username);
    }
}
