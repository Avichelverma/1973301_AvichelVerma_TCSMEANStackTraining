let obj = require('readline-sync');
let log = require('./logging');

let firstName = obj.question('Enter First Name :');
let lastName = obj.question('Enter Last Name :');
let gender = obj.question('Enter Gender :');
let email = obj.question('Enter Email :');

let personDetails = { firstName, lastName, gender, email, createdAt: new Date() };

log.storeData(personDetails);
