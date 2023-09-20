//Task:                Hangman
//Assigned to:         Admin
//Date assigned:       10th June 2023
//Due date:            10th June 2023
//Task complete?       Yes
//Task description:    Create an game called Hangman

var words = [
    "car",
    "bike",
    "charm",
    "sausage",
    "burger",
    "envelope",
    "maths",
    "hangman",
    "student",
    "hand"
]

function wordPicker() {
    return words[Math.floor(Math.random() * words.length)]
}

export {wordPicker};