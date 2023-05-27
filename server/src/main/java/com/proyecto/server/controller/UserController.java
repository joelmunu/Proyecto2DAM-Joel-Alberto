package com.proyecto.server.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.server.entities.User;
import com.proyecto.server.entities.DTO.UserDTO;
import com.proyecto.server.repository.UserRepository;

@RestController
public class UserController {
    
    @Autowired
    UserRepository userRepository;

    @GetMapping("/user/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable int id) {
        Optional<User> userOptional = userRepository.findById(id);
        User user = userOptional.get();
        UserDTO userDTO = new UserDTO(
            user.getUsername(),
            user.getFullname(),
            user.getHeight(),
            user.getWeight(),
            user.getPr_backSquat(),
            user.getPr_benchPress(),
            user.getPr_deadLift()
        );
        return ResponseEntity.ok(userDTO);
    }

    
}
