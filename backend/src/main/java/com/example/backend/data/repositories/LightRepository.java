package com.example.backend.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.data.entities.Light;

public interface LightRepository extends JpaRepository<Light, Long>{
    
}
