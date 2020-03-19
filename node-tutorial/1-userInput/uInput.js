// This file shows how to get user input
const argument = process.argv[2];

if(argument === 'add') {
    console.log('Added note!');
} else if (argument === 'remove'){ 
    console.log('Removed note!');
}