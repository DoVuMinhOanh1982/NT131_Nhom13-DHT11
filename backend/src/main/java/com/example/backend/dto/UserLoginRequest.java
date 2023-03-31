package com.example.backend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.example.backend.data.Constants;

@Getter
@Setter
@Builder
public class UserLoginRequest {
    @NotBlank(message = "Username is required")
    @Pattern(regexp = Constants.ONLY_ALPHABET_AND_NUMBER_REGEX, message = "Invalid username")
    private String username;

    @NotBlank(message = "Password is required")
    @Size(min = Constants.MIN_LENGTH_PASSWORD, max = Constants.MAX_LENGTH_PASSWORD, message = "The password must contain at least 6 characters and be up to 24 characters")
    private String password;
}