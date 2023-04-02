package com.example.backend.services.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.data.entities.Temperature;
import com.example.backend.data.repositories.TemperatureRepository;
import com.example.backend.dto.TemperatureRequest;
import com.example.backend.exceptions.BadRequestException;
import com.example.backend.services.TemperatureService;

import lombok.*;

@Service
@Builder
public class TemperatureServiceImpl implements TemperatureService {
    @Autowired
    private TemperatureRepository temperatureRepository;

    @Override
    public Temperature sensorSentTemperatureData(TemperatureRequest temperatureRequest) {
        if (temperatureRequest.getCelcius() == null || temperatureRequest.getFahrenheit() == null) {
            throw new BadRequestException("Missing fields, please send both C and F for a better result");
        }
        Date date = new Date();
        Temperature temperature = Temperature.builder()
                .celcius(temperatureRequest.getCelcius())
                .fahrenheit(temperatureRequest.getFahrenheit())
                .updatedAt(date)
                .build();
        return temperatureRepository.save(temperature);
    }

}
