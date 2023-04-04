package com.example.backend.services;

import com.example.backend.data.entities.Light;
import com.example.backend.dto.request.LightRequest;
import com.example.backend.dto.response.LightResponse;

public interface LightService {
    Light sensorSentLightData(LightRequest lightRequest);
    
    LightResponse getLightResponse();
}
