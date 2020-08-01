// Code your solutions in this file
let name = ['Lisa', 'Kaitlin', 'Jan'];
let surprise = "surprise";
let message = [];

function writeCards(name, surprise) {
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);
    }
    return message;
}

function countDown() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}