package com.example.backend.services;

import com.example.backend.data.entities.Humidity;
import com.example.backend.dto.response.HumidityResponse;

public interface HumidityService {
    Humidity sensorSentHumidityData(String humidity);

    HumidityResponse getHumidityData();
}
