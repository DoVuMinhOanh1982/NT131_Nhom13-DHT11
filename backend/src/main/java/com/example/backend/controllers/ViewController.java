package com.example.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.response.HumidityResponse;
import com.example.backend.dto.response.LightResponse;
import com.example.backend.dto.response.TemperatureResponse;
import com.example.backend.services.HumidityService;
import com.example.backend.services.LightService;
import com.example.backend.services.TemperatureService;

@RestController
@RequestMapping("/api/view")
public class ViewController {
    @Autowired
    private TemperatureService temperatureService;

    @Autowired
    private LightService lightService;

    @Autowired
    private HumidityService humidityService;

    @GetMapping("/temperature")
    public ResponseEntity<TemperatureResponse> viewTemperatureData() {
        return ResponseEntity.status(HttpStatus.OK).body(
                temperatureService.getTemperatureResponse());
    }

    @GetMapping("/light")
    public ResponseEntity<LightResponse> viewLightData() {
        return ResponseEntity.status(HttpStatus.OK).body(
                lightService.getLightResponse());
    }

    @GetMapping("/humidity")
    public ResponseEntity<HumidityResponse> viewHumidityData() {
        return ResponseEntity.status(HttpStatus.OK).body(
                humidityService.getHumidityData());
    }
}
