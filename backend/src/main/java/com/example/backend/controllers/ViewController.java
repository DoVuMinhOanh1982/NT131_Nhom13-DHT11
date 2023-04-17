package com.example.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.response.HumidityResponse;
import com.example.backend.dto.response.LightResponse;
import com.example.backend.dto.response.TemperatureResponse;
import com.example.backend.services.HumidityService;
import com.example.backend.services.LightService;
import com.example.backend.services.TemperatureService;

@RestController
@CrossOrigin(origins = "*")
public class ViewController {
    @Autowired
    private TemperatureService temperatureService;

    @Autowired
    private LightService lightService;

    @Autowired
    private HumidityService humidityService;

    @GetMapping(value = "/api/view/temperature", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<TemperatureResponse> viewTemperatureData() {
        return ResponseEntity.status(HttpStatus.OK).body(
                temperatureService.getTemperatureResponse());
    }

    @GetMapping(value = "/api/view/light", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<LightResponse> viewLightData() {
        return ResponseEntity.status(HttpStatus.OK).body(
                lightService.getLightResponse());
    }

    @GetMapping(value = "/api/view/humidity", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<HumidityResponse> viewHumidityData() {
        return ResponseEntity.status(HttpStatus.OK).body(
                humidityService.getHumidityData());
    }
}
