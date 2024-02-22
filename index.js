
messages = [
  "Your going to have a great day!",
  "If your not careful you might trip and fall today.",
  "Buy a lottery ticket today, you might get lucky!",
  "You should be careful today, you might get hurt.",
  "Today is a great day to meet someone new.",
  "You should avoid meeting new people today.",
  "Today is a great day to take a risk.",
  "You should avoid taking risks today.",
];

function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

console.log(randomMessage());