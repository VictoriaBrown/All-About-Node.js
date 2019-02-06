const message = require('./message');
const {message2} = require('./message2');
//let message3 = require('./message3').message3;
//let message3x = require('./message3').message3x;
const whatever = require('./message3');
const message4 = require('./message4');

message();
message.message1x();
message2();
//message3();
//message3x();
whatever.message3();
whatever.message3x();
console.log(message4.message);