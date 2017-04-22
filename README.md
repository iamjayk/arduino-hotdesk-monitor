
# IoT Projects
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)
[![PyPI](https://img.shields.io/pypi/status/Django.svg)]()

## Desk Monitoring System: [Dashboard Link](https://ajayk800.github.io/IoT/JavaScriptFirebase_CRUD/) [![GitHub release](https://img.shields.io/github/release/qubyte/rubidium.svg?style=plastic)](#)
### Introduction
A Desk Monitoring Device which Detects if a person or an object is present on a desk and reports the status as **Present** or **Away** to a remote Database. 
A Front-End Displays this Data from Database with Real-time updates.

### Components Used
- Arduino Nano  : [Details](https://www.arduino.cc/en/Main/ArduinoBoardNano)														
- Ultrasonic Sensor	: [Datasheet](http://www.electroschematics.com/8902/hc-sr04-datasheet/)																							
- nRF24L01 : [Info](https://arduino-info.wikispaces.com/Nrf24L01-2.4GHz-HowTo)																								
- Raspberry Pi 3 b : [Model Details](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)	

### Programming Languages and Technologies Used
[![PyPI](https://img.shields.io/pypi/pyversions/Django.svg)]() <br>
C			
C++		
Python		
#### Database
NoSQL: Google Firebase
#### Front-End Dashboard
HTML5		
CSS3		
JavaScript, jQuery	
Bootstrap

### How it Works? 
A Desk Monitoring Device which uses the following Components:
Arduino Nano as its main component, an Ultrasonic Sensor to detect Range,
an nRF24L01 to Transmit and Receive the Ultrasonic Sensor Data on a Raspberry Pi connected with another Arduino Nano + nRF24L01

3rd Node with an Arduino Nano, a PIR Sensor to detect Motion in a Room, and an nRF24L01, which would sense motion in a room and transmit 
data if yes or no to the receiving end.

Database Used for Storing the Sensor Data
Google Firebase

CRUD System Based on JavaScript which gets the Sensor Data from Firebase and Displays it

