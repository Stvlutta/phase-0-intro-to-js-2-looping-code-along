function writeCards(names, event) {
    // Create an empty array to hold the messages
    let messages = [];
    
    // Iterate over the names array
    for (let index = 0; index < names.length; index++) {
        // Create a thank you message for each name and add it to the messages array
        messages.push(`Thank you, ${names[index]}, for the wonderful ${event} gift!`);
    }
    
    // Return the array of messages
    return messages;
}

// Example usage:
const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";
console.log(writeCards(names, event));

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}