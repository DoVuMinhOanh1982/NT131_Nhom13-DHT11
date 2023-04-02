package com.example.backend.services;

import com.example.backend.data.entities.Temperature;
import com.example.backend.dto.TemperatureRequest;

public interface TemperatureService {
    Temperature sensorSentTemperatureData(TemperatureRequest temperatureRequest);
}
