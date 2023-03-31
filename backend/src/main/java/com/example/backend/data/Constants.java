package com.example.backend.data;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Constants {
    public static final String ONLY_ALPHABET_AND_NUMBER_REGEX = "^[a-zA-Z0-9]*$";
    public static final int MIN_LENGTH_PASSWORD = 6;
    public static final int MAX_LENGTH_PASSWORD = 24;
}
