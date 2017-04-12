import serial
import time
import datetime
import requests
import json
firebase_url = 'https://ultrasonicfirebase.firebaseio.com/'
# Connect to Serial Port for communication
ser = serial.Serial('COM8', 115200, timeout=0)
# Setup a loop to send Temperature values at fixed intervals
# in seconds
fixed_interval = 3
while 1:
    try:
        # temperature value obtained from Arduino + LM35 Temp Sensor
        ultrasonic_v = ser.readline()

        # current time and date
        time_hhmmss = time.strftime('%H:%M:%S')
        date_mmddyyyy = time.strftime('%d/%m/%Y')

        if "Y" in ultrasonic_v:
            status = "PRESENT"

        elif "N" in ultrasonic_v:
            status = "AWAY"

        # Print Current Value
        print ultrasonic_v

        # insert record
        if "US 01" in ultrasonic_v:
            data = {'Date': date_mmddyyyy,
                    'Time': time_hhmmss, 'US 01': status}
            result = requests.post(
                firebase_url + '/' + '/ultrasonic.json', data=json.dumps(data))
            
            print 'Record inserted.'
            time.sleep(fixed_interval)

        elif "US 02" in ultrasonic_v:
            data = {'Date': date_mmddyyyy,
                    'Time': time_hhmmss, 'US 02': status}
            result = requests.post(
                firebase_url + '/' + '/ultrasonic.json', data=json.dumps(data))

            print 'Record inserted.'
            time.sleep(fixed_interval)
    except IOError:
        print('Error! Something went wrong.')
