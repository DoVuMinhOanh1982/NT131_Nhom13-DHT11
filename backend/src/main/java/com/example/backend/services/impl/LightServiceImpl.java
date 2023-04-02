package com.example.backend.services.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.data.entities.Light;
import com.example.backend.data.repositories.LightRepository;
import com.example.backend.dto.LightRequest;
import com.example.backend.exceptions.BadRequestException;
import com.example.backend.services.LightService;

import lombok.*;

@Service
@Builder
public class LightServiceImpl implements LightService {
    @Autowired
    private LightRepository lightRepository;

    @Override
    public Light sensorSentLightData(LightRequest lightRequest) {
        if (lightRequest.getLight() == null || lightRequest.getUv() == null || lightRequest.getWindDensity() == null) {
            throw new BadRequestException("Missing fields, please send all 3 light values");
        }
        Date date = new Date();
        Light light = Light.builder()
                .light(lightRequest.getLight())
                .uv(lightRequest.getUv())
                .windDensity(lightRequest.getWindDensity())
                .updatedAt(date)
                .build();
        return lightRepository.save(light);
    }

}
