package com.example.backend.services.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.data.entities.Temperature;
import com.example.backend.data.repositories.TemperatureRepository;
import com.example.backend.dto.request.TemperatureRequest;
import com.example.backend.dto.response.TemperatureResponse;
import com.example.backend.exceptions.BadRequestException;
import com.example.backend.services.TemperatureService;

import lombok.*;

@Service
@Builder
public class TemperatureServiceImpl implements TemperatureService {
    @Autowired
    private TemperatureRepository temperatureRepository;

    @Override
    public Temperature sensorSentTemperatureData(TemperatureRequest temperatureRequest) {
        if (temperatureRequest.getCelcius() == null || temperatureRequest.getFahrenheit() == null) {
            throw new BadRequestException("Missing fields, please send both C and F for a better result");
        }
        Date date = new Date();
        Temperature temperature = Temperature.builder()
                .celcius(temperatureRequest.getCelcius())
                .fahrenheit(temperatureRequest.getFahrenheit())
                .updatedAt(date)
                .build();
        return temperatureRepository.save(temperature);
    }

    @Override
    public TemperatureResponse getTemperatureResponse() {
        Temperature temperature = temperatureRepository.findTopByOrderByIdDesc();
        if (temperature == null) {
            throw new BadRequestException("No data found");
        }
        String comment = "";
        String suggest = "";
        String warning = "";
        float celcius = Float.parseFloat(temperature.getCelcius());

        if (celcius <= 25) {
            comment = "Trời hôm nay khá lạnh đó!";
            suggest = "Nên mặc áo dài tay và quần dài";
            warning = "Nhiệt độ khá thấp, uống nhiều nước ấm và mặc quần áo dày để giữ ấm cơ thể. Nếu nhiệt độ giảm sâu cần sử dụng lò sưởi trong nhà (lưu ý không sử dụng sưởi bằng than trong phòng kín và ban đêm, có thể gây ngạt khí và ngộ độc CO)";
        } else if (celcius <= 30) {
            comment = "Nhiệt độ hoàn hảo để ra ngoài!";
            suggest = "Kem chống nắng, dù, mũ đội đầu, nước";
            warning = "Nhiệt độ hoàn hảo để ra ngoài, tuy nhiên vẫn nên bổ sung nước khi vận động nhiều. Khi ra ngoài nên chú ý chỉ số UV để lựa chọn các phụ kiện phù hợp";
        } else if (celcius <= 35) {
            comment = "Trời hôm nay khá nóng đó!";
            suggest = "Kem chống nắng, dù, mũ đội đầu, nước";
            warning = "Nhiệt độ khá cao, cần bổ sung nhiều nước và vitaminC tăng sức đề kháng. Khi ra ngoài cần chú ý chỉ số UV và chuẩn bị các phụ kiện chống nắng";
        } else {
            comment = "Trời rất nóng, hãy cẩn thận!";
            suggest = "Kem chống nắng, dù, mũ đội đầu, áo kháng UV, vitamin C, nước";
            warning = "Nhiệt độ rất cao, cần chuẩn bị các phụ kiện bảo hộ chống nắng kỹ càng khi ra ngoài, hạn chế tiếp xúc trực tiếp với ánh nắng mặt trời. Bổ sung nhiều nước, vitaminC, điện giải,… Chú ý không nên mở điều hòa quá thấp, chênh lệnh vừa phải với nhiệt độ ngoài trời, tránh gây sốc nhiệt.";
        }

        return TemperatureResponse.builder()
                .celcius(temperature.getCelcius())
                .fahrenheit(temperature.getFahrenheit())
                .comment(comment)
                .suggest(suggest)
                .warning(warning)
                .build();
    }

}
