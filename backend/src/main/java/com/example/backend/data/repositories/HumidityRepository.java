package com.example.backend.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.data.entities.Humidity;

public interface HumidityRepository extends JpaRepository<Humidity, Long>{
    
}
