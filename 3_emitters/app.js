// Need to require since events isn't in standard library
const events = require('events');

// Need to create instance of event before we can use it
const eventEmitter = new events.EventEmitter();

// Function to conole log a bell ringing
const ringBell = () => {
    console.log('ring ring ring');
}

// We need an event listener to let us know when someone is here to ring the bell
// Creating custom event listener
eventEmitter.on('guestHere', ringBell)

// Before opening the door, we want to ask who is there
const sayHello = () => {
    console.log(`Hello, who is there?`);
}

// Need another event listener for guestHere so we know when to call sayHello()
eventEmitter.on('guestHere', sayHello);

// Instead of passing a function as an argument, you can create a function
// directly inside of an Event Listener. We can also grab the argument using 
// this method of event listening
eventEmitter.on('guestHere', (action) => {
    // We are just printing the argument that the guest says here.
    console.log(action)
}) 

// Here we are calling guestHere so our event listener will be activated
// When the guest shows up, the guest says he is here - hence the second argument
eventEmitter.emit('guestHere', "it's me, your guest!");