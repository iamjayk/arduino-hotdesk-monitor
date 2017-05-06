import serial
import time
import datetime
import requests
import json
firebase_url = 'https://ultrasonicfirebase.firebaseio.com/'     # Your firebase Database Link
# Connect to Serial Port for communication
ser = serial.Serial('COM8', 115200, timeout=0)                       # WHATEVER COM PORT the device is connected to
# Setup a loop to send Sensor values at fixed intervals
# in seconds
fixed_interval = 3
while 1:
    try:
        # Ultrasonic Distance value obtained and converted from Arduino + HC-SR04 Sensor
        ultrasonic_v = ser.readline()

        # current time and date
        time_hhmmss = time.strftime('%H:%M:%S')
        date_mmddyyyy = time.strftime('%d/%m/%Y')

        if "Y" in ultrasonic_v:
            status = "PRESENT"
        else:
            status = "AWAY"

        # Print Current Value
        print ultrasonic_v

        # insert record
        if "US 01" in ultrasonic_v:
            data = {'Date': date_mmddyyyy,
                    'Time': time_hhmmss, 'US01': status}
            result = requests.post(
                firebase_url + '/' + '/ultrasonic.json', data=json.dumps(data))

            print 'Record inserted.'
            time.sleep(fixed_interval)

        elif "US 02" in ultrasonic_v:
            data = {'Date': date_mmddyyyy,
                    'Time': time_hhmmss, 'US02': status}
            result = requests.post(
                firebase_url + '/' + '/ultrasonic.json', data=json.dumps(data))

            print 'Record inserted.'
            time.sleep(fixed_interval)
    except IOError:
        print('Error! Something went wrong.')
