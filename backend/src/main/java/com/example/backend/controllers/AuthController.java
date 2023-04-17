package com.example.backend.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.request.UserLoginRequest;
import com.example.backend.dto.response.UserLoginResponse;
import com.example.backend.services.LoginService;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private LoginService loginService;

    @PostMapping(value = "/api/login", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<UserLoginResponse> login(@Valid @RequestBody UserLoginRequest userLoginRequest) {
        return ResponseEntity.status(HttpStatus.OK).body(
                loginService.login(userLoginRequest));
    }
}