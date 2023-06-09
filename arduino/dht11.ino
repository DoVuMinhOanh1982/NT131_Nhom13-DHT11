//Thư viện cần sử dụng
#include "DHT.h"
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>

#define DHTPIN 2   // Chân kỹ thuật số kết nối với DHT11
#define DHTTYPE DHT11   // Đặt loại cảm biến là DHT11

DHT dht(DHTPIN, DHTTYPE);

const char *ssid = "ShareWifi"; // Nhập ssid wifi
const char *password = "MinhOanh"; // Nhập pass wifi

// Khai báo các biến được sử dụng để lưu thông số được đo từ cảm biến
float humi;
float tempC;
float tempF; 
int light;
int uv;
int wind;

// Thiết lập đối tượng client
WiFiClient client;
HTTPClient http;
  
void setup() {
  delay(3000);
  Serial.begin(9600);

  // Khởi động cảm biến
  dht.begin();

  //Kết nối wifi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected"); // Kết nối wifi thành công
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP()); // Lấy địa chỉ IP của thiết bị
  delay(1000);
}

void loop() {
  // Lấy thông số từ cảm biến
  humi = dht.readHumidity();
  tempC = dht.readTemperature();
  tempF = dht.readTemperature(true);
  light = rand() % 7901 + 2100;
  uv = rand() % 11 + 1;
  wind = rand() % 10;
  

  // Kiểm tra có đọc được dữ liệu từ sensor hay không   
   if (isnan(humi) || isnan(tempC) || isnan(tempF) || isnan(light) || isnan(uv) || isnan(wind)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }         
  
  // Hiển thị kết quả thu được lên màn hình
  Serial.print("Humidity = ");
  Serial.print(humi);
  Serial.print("%  ");
  Serial.print("Temperature = ");
  Serial.print(tempC); 
  Serial.print("oC ~ ");
  Serial.print(tempF); 
  Serial.print("oF  ");
  Serial.print("Light = ");
  Serial.print(light);
  Serial.print("lux  ");
  Serial.print("UV = ");
  Serial.print(uv);
  Serial.print("  windDensity = ");
  Serial.print(wind);
  Serial.println("km/h");
  
  // Tạo kết nối server và gửi dữ liệu 
  String h = "";
  h.concat(humi);
  http.begin(client, "http://192.168.43.91:8090/api/humidity");
  http.addHeader("Content-Type", "application/json");
  int httpCode = http.POST("{\"humidity\":" + h + "}");  
  
  // Kiểm tra phản hồi của server với độ ẩm (httpCode = 200, 404, 500)
  if(httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_NOT_FOUND || httpCode == HTTP_CODE_INTERNAL_SERVER_ERROR){
    Serial.print("Response Humidity: ");
    Serial.println(http.getString());
    Serial.print("HttpCode: ");
    Serial.println(httpCode);
  }
  else{
    Serial.printf("Error humidity: %s", http.errorToString(httpCode).c_str());
    Serial.print(" - httpcode: ");
    Serial.println(httpCode);
  }

  String tC = "";
  tC.concat(tempC);
  String tF = "";
  tF.concat(tempF);
  http.begin(client, "http://192.168.43.91:8090/api/temperature");
  http.addHeader("Content-Type", "application/json");
  int httpCode1 = http.POST("{\"celcius\":" + tC + ",\"fahrenheit\":" + tF + "}");
  
  // Kiểm tra phản hồi của server với độ ẩm (httpCode = 200, 404, 500)
  if(httpCode1 == HTTP_CODE_OK || httpCode1 == HTTP_CODE_NOT_FOUND || httpCode1 == HTTP_CODE_INTERNAL_SERVER_ERROR){
    Serial.print("Response Temperature: ");
    Serial.println(http.getString());
    Serial.print("HttpCode: ");
    Serial.println(httpCode);
  }
  else{
    Serial.printf("Error temperature: %s", http.errorToString(httpCode).c_str());
    Serial.print(" - HttpCode: ");
    Serial.println(httpCode);
  }

  String l = "";
  String u = "";
  String w = "";
  l.concat(light);
  u.concat(uv);
  w.concat(wind);
  http.begin(client, "http://192.168.43.91:8090/api/light");
  http.addHeader("Content-Type", "application/json");
  int httpCode2 = http.POST("{\"light\":" + l + ",\"uv\":" + u + ",\"windDensity\":" + w + "}");  
  
  // Kiểm tra phản hồi của server với các thông số khác (httpCode = 200, 404, 500)
  if(httpCode2 == HTTP_CODE_OK || httpCode2 == HTTP_CODE_NOT_FOUND || httpCode2 == HTTP_CODE_INTERNAL_SERVER_ERROR){
    Serial.print("Response Light: ");
    Serial.println(http.getString());
    Serial.print("HttpCode: ");
    Serial.println(httpCode);
  }
  else{
    Serial.printf("Error light: %s", http.errorToString(httpCode).c_str());
    Serial.print(" - httpcode: ");
    Serial.println(httpCode);
  }

  http.end(); // Ngắt kết nối
  Serial.println("--------------------");
  delay(10000); //Gửi dữ liệu 10s/lần 
}