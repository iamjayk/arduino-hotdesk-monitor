
# IoT Projects
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)

## Desk Monitoring System 
[IoT-Dashboard](https://ajayk800.github.io/IoTDashboard/) <br/><br/>

Complete Information and Technical Details on [Wiki](https://github.com/ajayk800/IoT/wiki)

### DESCRIPTION 
The Desk Monitoring System is an Arduino based Pilot IoT Project that uses an Ultrasonic Sensor which detects a person or an object's presence on a desk and reports the status as **Present** or **Away** to a remote Database. 
A Front-End Dashboard Displays this Information from Database with Real-time updates.

### COMPONENTS USED  
- Arduino Nano  : [Details](https://www.arduino.cc/en/Main/ArduinoBoardNano)	
- Ultrasonic Sensor	: [Datasheet](http://www.electroschematics.com/8902/hc-sr04-datasheet/)
- nRF24L01 : [Info](https://arduino-info.wikispaces.com/Nrf24L01-2.4GHz-HowTo)		
- Raspberry Pi 3 b : [Model Details](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)	
![DM](https://raw.github.com/ajayk800/IoT/master/screenshots/DM_Components.png)

### PROGRAMMING LANGUAGES & TECHNOLOGIES USED
- C	| C++ Functions		
- Python		

#### Database
- NoSQL: Google Firebase 
- Firebase REST API (Python, Javascript) <br/><br/>
![FB1](https://raw.github.com/ajayk800/IoT/master/screenshots/Firebase1.png)
![FB2](https://raw.github.com/ajayk800/IoT/master/screenshots/Firebase2.png)


#### Front-End Dashboard
- HTML5		
- CSS3		
- JavaScript, jQuery	
- Bootstrap

![Dashboard](https://raw.github.com/ajayk800/IoT/master/screenshots/IoT_Dashboard.png)


#### Repository File Structure

##### Main Arduino Programs for Sensing/transmitting data 
- Desk_Monitor_MainNode.ino       
- Receiving_MainNode.ino

##### Python Programs for storing data to Firebase | SQLite from receiving Arduino Unit
- RealTime_Firebase_Uploader.py
- RealTime_to_SQLite.py

##### Java Program for Reading Data from receiving Arduino Unit
- receiverPortReader.java
