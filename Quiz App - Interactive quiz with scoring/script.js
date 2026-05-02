const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Main Link"],
        correct: 0
    },
    {
        question: "Which CSS property changes text color?",
        options: ["font-style", "background-color", "color"],
        correct: 2
    },
    {
        question: "Is JavaScript the same as Java?",
        options: ["Yes", "No", "Only in browsers"],
        correct: 1
    }
];
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; // Clear old buttons

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function handleAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score").innerText = score;
    document.getElementById("total").innerText = quizData.length;
}

loadQuestion(); // Start the quiz