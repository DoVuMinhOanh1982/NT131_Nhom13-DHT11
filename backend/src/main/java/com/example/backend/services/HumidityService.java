package com.example.backend.services;

import com.example.backend.data.entities.Humidity;
import com.example.backend.dto.request.HumidityRequest;
import com.example.backend.dto.response.HumidityResponse;

public interface HumidityService {
    Humidity sensorSentHumidityData(HumidityRequest humidity);

    HumidityResponse getHumidityData();
}
