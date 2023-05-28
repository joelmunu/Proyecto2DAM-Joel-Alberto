package com.proyecto.server.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.server.entities.User;
import com.proyecto.server.entities.DTO.UserDTO;
import com.proyecto.server.entities.DTO.UserLoginDTO;
import com.proyecto.server.repository.UserRepository;
import com.proyecto.server.services.UserService;



import org.mindrot.jbcrypt.*;

@RestController
public class UserController {
    
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

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

    @PostMapping("/registeruser")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        String contrasenaEncriptada = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(contrasenaEncriptada);
        userService.save(user);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginDTO userLoginDTO) {

        String encryptedPassword = userService.findPasswordByUsername(userLoginDTO.getUsername());
        
        
        if (encryptedPassword == null || encryptedPassword == "") {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User or password is incorrect");
        }

        if (BCrypt.checkpw(userLoginDTO.getPassword(), encryptedPassword)) {
            return ResponseEntity.ok().body("Login completed sucessfully");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User or password is incorrect");
        }
        
    }
}
