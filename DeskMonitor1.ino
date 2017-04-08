// --------------------------------------------------------------------------------------------------------------
// Arduino Sketch for Measuring Distance and Transmitting Data using Ultrasonic ranger and nRF24L01 Module Resp.
// --------------------------------------------------------------------------------------------------------------

#include <NewPing.h>  // Newping Library for Ultrasonic Sensor
#include <SPI.h>      // Serial Peripheral Interface Library for Short Distance Communication
#include <nRF24L01.h> // nRF24L01 Library
#include <RF24.h>     // RF24 Library

#define TRIGGER_PIN  4  // Arduino pin tied to trigger pin on the ultrasonic sensor.
#define ECHO_PIN     3  // Arduino pin tied to echo pin on the ultrasonic sensor.
#define MAX_DISTANCE 200 // Maximum distance we want to ping for (in centimeters). Maximum sensor distance is rated at 400-500cm.


RF24 radio(7, 8); // Radio Pins D7, D8
const byte rxAddr[6] = "00001"; // Receiving Arduino with nRF24L01 Address
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); // NewPing setup of pins and maximum distance.

void setup() {
  Serial.begin(115200); // Open serial monitor at 115200 baud to see ping results.
  radio.begin();                        // Start Radio on Sender Device
  radio.setRetries(15, 15);             // Retries for Transmission
  radio.openWritingPipe(rxAddr);        // Open a pipe for writing with receiving address
  radio.stopListening();                // Stop the Radio Listening

  pinMode(13, OUTPUT);              // Manual LED Control
  while (!Serial);
  Serial.println("Input 1 to Turn LED on and 2 to off");  
}

void loop() {
  
 
  delay(50);                      // Wait 50ms between pings (about 20 pings/sec). 29ms should be the shortest delay between pings.
  unsigned int uS = sonar.ping(); // Send ping, get ping time in microseconds (uS).
  unsigned int dist = uS / US_ROUNDTRIP_CM; // Convert ping time to distance in cm and print result (0 = outside set distance range) 
  const char yes[] = "Y";         // Constant character declaration         
  const char no[] = "N";          // Constant character declaration
  
  if (dist > 0 && dist < 60) {    // If the measured distance from ultrasonic sensor is greater than zero and less than 60cms Transmit character Y to the receiving arduino    
    radio.write("US01: Y",yes); 
    }
  else { 
    radio.write("US01: N",no);    // Else Transmit character N to the Receiving Arduino
    } 
    
    if (Serial.available())
    {
                                
                                // Serial Input to turn on/off LED
  int state = Serial.parseInt();

    if (state == 1)
    {
    digitalWrite(13, HIGH);
    Serial.println("Command completed LED turned ON");
    }
    if (state == 2)
    {
    digitalWrite(13, LOW);
    Serial.println("Command completed LED turned OFF");
    }
    }
    
    delay(50);
}
