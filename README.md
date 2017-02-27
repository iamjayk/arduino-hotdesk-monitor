# IoT
IoT Projects in Here

=========================================================================================================================================
1] Desk Monitoring System 
=========================================================================================================================================
A Desk Monitoring Device which uses the following Components:
Arduino Nano as its main component, an Ultrasonic Sensor to detect Range,
an nRF24L01 to Transmit and Receive the Ultrasonic Sensor Data.
[In addition a new Ethernet Shield would be added at some point]

Another Node would be the receiving end with an Arduino Nano and an nRF24L01 receiver to receive data from the main sensing device.

3rd Node with an Arduino Nano, a PIR Sensor to detect Motion in a Room, and an nRF24L01, which would sense motion in a room and transmit 
data if yes or no to the receiving end.

=========================================================================================================================================
                                              Database to Use for Storing the Sensor Data
                                              
                                              Amazon DynamoDB
=========================================================================================================================================
                                              Other stuff to note:
                                              
                                              MQTT Protocol Message Publish/Subscribe using Adafruit Dashboard
=========================================================================================================================================

                                            
