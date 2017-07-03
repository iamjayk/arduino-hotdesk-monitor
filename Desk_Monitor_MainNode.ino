// --------------------------------------------------------------------------------------------------------------
// Arduino Sketch for Measuring Distance and Transmitting Data using Ultrasonic ranger and nRF24L01 Module Resp.  
// Written By: Ajay Kumar
// --------------------------------------------------------------------------------------------------------------
#include <NewPing.h>  // Newping Library for HC-SR04
#include <SPI.h>      // Serial Peripheral Interface Library for Short Distance Communication
#include <nRF24L01.h> // nRF24L01 Library
#include <RF24.h>     // RF24 Library

#define TRIGGER_PIN  4  // Arduino D4 ---- HC-SR04 Trigger Pin
#define ECHO_PIN     3  // Arduino D3 ---- HC-SR04 ECHO Pin
#define MAX_DISTANCE 200 // Maximum distance (in centimeters).

RF24 radio(7, 8); // Radio Pins D7, D8
const byte rxAddr[6] = "00001"; // Receiver Node Address
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); // NewPing setup of pins and maximum distance.

void setup() {
  Serial.begin(115200); // Open serial monitor at 115200 baud to see ping results.
  radio.begin();                        // Start Radio on Sender Device
  radio.setRetries(15, 15);             
  radio.openWritingPipe(rxAddr);        // Open a pipe for writing with receiving address
  radio.stopListening();                  
}

void loop () {
  delay (50);                    
  unsigned int uS = sonar.ping(); // Send ping, get ping time in microseconds (uS).
  unsigned int dist = uS / US_ROUNDTRIP_CM; // Convert ping time to distance in cm and print result (0 = outside set distance range) 
  const char yes[] = "Y";              
  const char no[] = "N";          
  String deviceName = String("US 01: ");
  String statusValue = "DEFAULT";
  
  if (dist > 0 && dist <= 60) {    // If the measured distance from ultrasonic sensor is greater than zero and less than 60cms Transmit character Y to the receiving arduino  
    const char transmitName[] = "US 01: Y";
    statusValue = deviceName + 'Y'; 
    radio.write(&transmitName, transmitName);
    Serial.println(statusValue);  
    delay(3000);
  } 
  else { 
    const char transmitName[] = "US 01: N";
    statusValue = deviceName + 'N';
    radio.write(&transmitName, transmitName); // Else Transmit character N to the Receiving Arduino
    Serial.println(statusValue);
    delay(3000);
    }   
}

