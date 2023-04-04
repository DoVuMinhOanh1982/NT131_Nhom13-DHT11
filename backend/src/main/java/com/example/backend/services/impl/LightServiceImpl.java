package com.example.backend.services.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.data.entities.Light;
import com.example.backend.data.repositories.LightRepository;
import com.example.backend.dto.request.LightRequest;
import com.example.backend.dto.response.LightResponse;
import com.example.backend.exceptions.BadRequestException;
import com.example.backend.services.LightService;

import lombok.*;

@Service
@Builder
public class LightServiceImpl implements LightService {
    @Autowired
    private LightRepository lightRepository;

    @Override
    public Light sensorSentLightData(LightRequest lightRequest) {
        if (lightRequest.getLight() == null || lightRequest.getUv() == null || lightRequest.getWindDensity() == null) {
            throw new BadRequestException("Missing fields, please send all 3 light values");
        }
        Date date = new Date();
        Light light = Light.builder()
                .light(lightRequest.getLight())
                .uv(lightRequest.getUv())
                .windDensity(lightRequest.getWindDensity())
                .updatedAt(date)
                .build();
        return lightRepository.save(light);
    }

    @Override
    public LightResponse getLightResponse() {
        Light light = lightRepository.findTopByOrderByIdDesc();
        if (light == null) {
            throw new BadRequestException("No data found");
        }

        String suggest = "";
        String warning = "";

        int uv = Integer.parseInt(light.getUv());
        if (uv < 5) {
            suggest = "Kem chống nắng, dù";
            warning = "Mức UV an toàn, tuy nhiên vẫn cần sử dụng kem chống nắng. Xem kĩ hơn về tiêu chuẩn kem chống nắng tại phần gợi ý";
        } else if (uv <= 7 && uv >= 5) {
            suggest = "Áo kháng UV, mũ đội đầu ";
            warning = "Mức uv khá cao, cần sử dụng kem chống nắng, váy chống nắng để tránh say nắng, lưu ý bổ sung thêm vitamin để giữ sức khoẻ.";
        } else {
            suggest = "Áo kháng UV, mũ, dù, nước, vitamin C";
            warning = "Mức uv rất cao, cần đem các trang thiết bị cần thiết và mặc trang bị bảo hộ chống nắng";
        }

        return LightResponse.builder()
                .light(light.getLight())
                .uv(light.getUv())
                .windDensity(light.getWindDensity())
                .suggest(suggest)
                .warning(warning)
                .build();
    }

}
