const openings = [
  "Remember,",
  "Never forget,",
  "Always keep in mind,",
  "Deep down you know,",
  "Every great journey starts with:",
];

const cores = [
  "\"The only limit is the one you set yourself.\"",
  "\"Fall seven times, stand up eight.\"",
  "\"Dream big and dare to fail.\"",
  "\"Your time is limited, so don't waste it living someone else's life.\"",
  "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"",
  "\"Believe you can and you're halfway there.\"",
];

const closings = [
  "Keep pushing forward!",
  "You've got this!",
  "The best is yet to come.",
  "One step at a time.",
  "Stay strong and carry on.",
];

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

const quote = `${rand(openings)} ${rand(cores)} ${rand(closings)}`

console.log(quote)