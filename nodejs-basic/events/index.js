const {EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }

myEventEmitter.on('TodayBirthday', birthdayEventListener);

myEventEmitter.emit('TodayBirthday', 'Teguh');