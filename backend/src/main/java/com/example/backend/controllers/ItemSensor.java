package com.example.backend.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.data.entities.Humidity;
import com.example.backend.data.entities.Light;
import com.example.backend.data.entities.Temperature;
import com.example.backend.dto.LightRequest;
import com.example.backend.dto.TemperatureRequest;
import com.example.backend.services.HumidityService;
import com.example.backend.services.LightService;
import com.example.backend.services.TemperatureService;

@RestController
@RequestMapping("/api")
public class ItemSensor {
    @Autowired
    private TemperatureService temperatureService;

    @Autowired
    private LightService lightService;

    @Autowired
    private HumidityService humidityService;

    @PostMapping("/temperature")
    public ResponseEntity<Temperature> sensorSentTemperatureData(
            @Valid @RequestBody TemperatureRequest temperatureRequest) {
        return ResponseEntity.status(HttpStatus.OK).body(
                temperatureService.sensorSentTemperatureData(temperatureRequest));
    }

    @PostMapping("/light")
    public ResponseEntity<Light> sensorSentLightData(@Valid @RequestBody LightRequest lightRequest) {
        return ResponseEntity.status(HttpStatus.OK).body(
                lightService.sensorSentLightData(lightRequest));
    }

    @PostMapping("/humidity")
    public ResponseEntity<Humidity> sensorSentHumidityData(@Valid @RequestParam(defaultValue = "60") String humidity) {
        return ResponseEntity.status(HttpStatus.OK).body(
                humidityService.sensorSentHumidityData(humidity));
    }
}
