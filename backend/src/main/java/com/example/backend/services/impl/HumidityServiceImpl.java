package com.example.backend.services.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.data.entities.Humidity;
import com.example.backend.data.repositories.HumidityRepository;
import com.example.backend.dto.request.HumidityRequest;
import com.example.backend.dto.response.HumidityResponse;
import com.example.backend.exceptions.BadRequestException;
import com.example.backend.services.HumidityService;

import lombok.*;

@Service
@Builder
public class HumidityServiceImpl implements HumidityService {
    @Autowired
    private HumidityRepository humidityRepository;

    @Override
    public Humidity sensorSentHumidityData(HumidityRequest humidity) {
        if (humidity == null) {
            throw new BadRequestException("Missing fields, please send with humidity. check your field again");
        }
        Date date = new Date();
        Humidity humidityResponse = Humidity.builder()
                .humidity(humidity.getHumidity())
                .updatedAt(date)
                .build();
        return humidityRepository.save(humidityResponse);
    }

    @Override
    public HumidityResponse getHumidityData() {
        Humidity humidity = humidityRepository.findTopByOrderByIdDesc();
        if (humidity == null) {
            throw new BadRequestException("No data found");
        }

        String suggest = "";
        String warning = "";

        float humidityData = Float.parseFloat(humidity.getHumidity());
        if (humidityData <= 40) {
            suggest = "Kem dưỡng ẩm da, son dưỡng ẩm môi";
            warning = "Độ ẩm quá thấp, cần bổ sung gấp nước và sử dụng kem dưỡng ẩm, son dưỡng ẩm cho môi và da. Da có thể bị khô nứt hoặc tác động xấu nếu không sử dụng các sản phẩm bảo vệ hợp lý. Bảo quản các đồ dùng bằng da và gỗ tránh bị nứt ";
        } else if (humidityData <= 65 && humidityData > 40) {
            suggest = "Kem dưỡng ẩm da";
            warning = "Độ ẩm hoàn hảo. vẫn cần bổ sung nhiều nước";
        } else {
            suggest = "Dù, áo mưa";
            warning = "Độ ẩm cao, trời nồm. sàn nhà dễ tụ nước gây ẩm mốc và dễ trượt té. Lưu ý giữ ấm cơ thể, vì đây là môi trường hoàn hảo cho nấm mốc sinh sôi và phát triển";
        }

        return HumidityResponse.builder()
                .humidity(humidity.getHumidity())
                .suggest(suggest)
                .warning(warning)
                .build();
    }

}
