package com.proyecto.server.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.proyecto.server.entities.User;
import com.proyecto.server.services.UserService;

@Component
public class InitDatabase implements CommandLineRunner{

    @Autowired
    UserService userService;

    @Override
    public void run(String... args) throws Exception {
        User user = new User("nombre", "fullname", 1.0f, 1.0f, 1, "male", "1234", 122, 122, 122);
        userService.save(user);
    }

    
}
