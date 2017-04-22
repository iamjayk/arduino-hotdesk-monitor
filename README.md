# IoT Projects
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)

## Desk Monitoring System: [Dashboard Link](https://ajayk800.github.io/IoT/JavaScriptFirebase_CRUD/)
### Introduction
A Desk Monitoring Device which Detects if a person or an object is present on a desk and reports the status as **Present** or **Away** to a remote Database. 
A Front-End Displays this Data from Database with Real-time updates.

### Components Used
- Arduino Nano  : [Details](https://www.arduino.cc/en/Main/ArduinoBoardNano)														
- Ultrasonic Sensor	: [Datasheet](http://www.electroschematics.com/8902/hc-sr04-datasheet/)																							
- nRF24L01 																										
- Raspberry Pi	

### Programming Languages and Technologies used
C			
C++		
Python		
#### Front-End Dashboard
HTML5		
CSS3		
JavaScript, jQuery	
Bootstrap
#### Database used
NoSQL: Google Firebase

A Desk Monitoring Device which uses the following Components:
Arduino Nano as its main component, an Ultrasonic Sensor to detect Range,
an nRF24L01 to Transmit and Receive the Ultrasonic Sensor Data on a Raspberry Pi connected with another Arduino Nano + nRF24L01

3rd Node with an Arduino Nano, a PIR Sensor to detect Motion in a Room, and an nRF24L01, which would sense motion in a room and transmit 
data if yes or no to the receiving end.

Database Used for Storing the Sensor Data
Google Firebase

CRUD System Based on JavaScript which gets the Sensor Data from Firebase and Displays it

