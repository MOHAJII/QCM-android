// js/mobile.js
const questions = [
    {
        question: "Quel est le langage de programmation principal recommandé par Google pour le développement Android ?",
        options: ["Java", "Kotlin", "Python", "JavaScript"],
        correct: "Kotlin",
        explanation: "Kotlin est recommandé depuis 2017 pour sa concision et sa sécurité."
    },
    {
        question: "Quel composant Android gère une interface utilisateur à un seul écran ?",
        options: ["Service", "Activity", "Broadcast Receiver", "Content Provider"],
        correct: "Activity",
        explanation: "Une Activity représente un écran avec une interface utilisateur."
    },
    // Ajoutez d'autres questions ici
];

let currentQuestion = 0;
const userAnswers = Array(questions.length).fill(null);

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsDiv.appendChild(label);
    });
    // Restore previous answer if exists
    if (userAnswers[currentQuestion]) {
        const radios = document.getElementsByName('answer');
        for (let radio of radios) {
            if (radio.value === userAnswers[currentQuestion]) {
                radio.checked = true;
                break;
            }
        }
    }
    document.getElementById('feedback').textContent = '';
    updateNavButtons();
}

document.getElementById('submit').addEventListener('click', () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        document.getElementById('feedback').textContent = "Veuillez sélectionner une réponse.";
        return;
    }
    const answer = selected.value;
    userAnswers[currentQuestion] = answer;
    const correct = questions[currentQuestion].correct;
    const feedback = document.getElementById('feedback');
    if (answer === correct) {
        feedback.textContent = `Correct ! ${questions[currentQuestion].explanation}`;
        feedback.className = 'correct';
    } else {
        feedback.textContent = `Incorrect. La réponse correcte est : ${correct}. ${questions[currentQuestion].explanation}`;
        feedback.className = 'incorrect';
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

function updateNavButtons() {
    document.getElementById('prev').disabled = currentQuestion === 0;
    document.getElementById('next').disabled = currentQuestion === questions.length - 1;
}

// Charger la première question
loadQuestion();
