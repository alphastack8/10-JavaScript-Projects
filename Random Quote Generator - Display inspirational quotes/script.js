const quotesArray = [
    "Dream big. Pray bigger.",
    "Action is the key.",
    "Stay hungry, stay foolish.",
    "Hustle beats talent.",
    "Do it with passion.",
    "Success is a journey.",
    "Make it happen.",
    "Focus on the goal.",
    "Believe you can.",
    "Small steps, big results.",
    "Work hard, stay humble.",
    "Never give up.",
    "Winners never quit.",
    "Success is earned.",
    "Be your own hero.",
    "Consistency is everything.",
    "Results, not excuses.",
    "Progress over perfection.",
    "Greatness takes time.",
    "Start where you are."
];

const button = document.querySelector('button');
const quoteElement = document.querySelector('h1');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * quotesArray.length);
    quoteElement.textContent = quotesArray[index];
});