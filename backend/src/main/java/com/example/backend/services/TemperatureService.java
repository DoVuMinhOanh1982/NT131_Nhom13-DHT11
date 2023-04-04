package com.example.backend.services;

import com.example.backend.data.entities.Temperature;
import com.example.backend.dto.request.TemperatureRequest;
import com.example.backend.dto.response.TemperatureResponse;

public interface TemperatureService {
    Temperature sensorSentTemperatureData(TemperatureRequest temperatureRequest);

    TemperatureResponse getTemperatureResponse();

}
