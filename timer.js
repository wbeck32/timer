#!/usr/bin/env node
var timeFunctions = require('./timeFunctions');

//user should enter alarm time
alarmTime = Date.parse("01/09/15 13:50:00 -8:00");
timeFunctions.setReminder(alarmTime,'alarm');
