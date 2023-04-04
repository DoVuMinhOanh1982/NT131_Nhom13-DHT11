package com.example.backend.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.data.entities.Temperature;

public interface TemperatureRepository extends JpaRepository<Temperature, Long> {
    Temperature findTopByOrderByIdDesc();
}
