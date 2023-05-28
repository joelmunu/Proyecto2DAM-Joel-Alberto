package com.proyecto.server;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")  // Permitir todas las solicitudes desde cualquier origen
                .allowedMethods("*")  // Permitir todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)
                .allowedHeaders("*"); // Permitir todas las cabeceras
    }
}