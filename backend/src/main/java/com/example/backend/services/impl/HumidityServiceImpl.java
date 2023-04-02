package com.example.backend.services.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.data.entities.Humidity;
import com.example.backend.data.repositories.HumidityRepository;
import com.example.backend.exceptions.BadRequestException;
import com.example.backend.services.HumidityService;

import lombok.*;

@Service
@Builder
public class HumidityServiceImpl implements HumidityService {
    @Autowired
    private HumidityRepository humidityRepository;

    @Override
    public Humidity sensorSentHumidityData(String humidity) {
        if (humidity == null) {
            throw new BadRequestException("Missing fields, please send with humidity. check your field again");
        }
        Date date = new Date();
        Humidity humidityResponse = Humidity.builder()
                .humidity(humidity)
                .updatedAt(date)
                .build();
        return humidityRepository.save(humidityResponse);
    }

}
