package com.example.backend.services;

import com.example.backend.data.entities.Humidity;

public interface HumidityService {
    Humidity sensorSentHumidityData(String humidity);
}
