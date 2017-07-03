# 
# Store The Receiver Unit's Data to SQLite Database Locally
#

import serial
import time

import sqlite3
import os
from datetime import datetime

conn = sqlite3.connect("ultrasonic.db") # or use :memory: to put it in RAM

cursor = conn.cursor()
sql_file = os.path.join(os.path.dirname(__file__), 'ultrasonic.db')
needs_creation = not os.path.exists(sql_file) 
db_connection = sqlite3.connect(sql_file)
db_connection.row_factory = sqlite3.Row

# create a table
if needs_creation:
    print 'Creating initial database...'
    cursor = db_connection.cursor()

    db_connection.commit()
    print 'Database created.'

cursor.executescript("""
                    DROP TABLE IF EXISTS ultrasonic;
                    CREATE TABLE ultrasonic (id INTEGER PRIMARY KEY AUTOINCREMENT, Name, date CURDATE )
                    """)

#enter your device file
arddev = '/dev/ttyUSB0'
baud = 9600

#setup - if a Serial object can't be created, a SerialException will be raised.
while True:
    try:
        ser = serial.Serial(arddev, baud)

        #break out of while loop when connection is made
        break
    except serial.SerialException:
        print 'waiting for device ' + arddev + ' to be available'
        time.sleep(3)

#read lines from serial device
count = 0
while count < 5:

    element = ser.readline().strip('\n')
    count = count + 1
    datestamp = datetime.now()
    print 'received the element: ' + element 
    print datestamp

    cursor.execute('insert into ultrasonic(Name) values("%s")'%(element))
    db_connection.commit()

allentries = []
cursor.execute('SELECT * FROM ultrasonic')

allentries=cursor.fetchall()

print allentries
