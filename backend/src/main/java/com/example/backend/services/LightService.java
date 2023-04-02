package com.example.backend.services;

import com.example.backend.data.entities.Light;
import com.example.backend.dto.LightRequest;

public interface LightService {
    Light sensorSentLightData(LightRequest lightRequest);
}
