let q = 0;
let score = 0;
let selectedAnswers = [];
const questions = [
    "What does SDG 13 focus on?",
    "Which of the following is a major cause of climate change?",
    "What is the main greenhouse gas responsible for global warming?",
    "Which of the following is an impact of climate change?",
    "What is one way individuals can help fight climate change?",
    "How does deforestation contribute to climate change?",
    "What is the effect of melting polar ice caps?",
    "Finally, do you think the creator of this quiz is handsome?"
];

const choices = [
    "Clean water and sanitation", "Climate action", "Affordable and clean energy", "Life below water",
    "Deforestation", "Greenhouse gas emissions", "Burning fossil fuels", "All of the above",
    "Oxygen O₂", "Carbon dioxide CO₂", "Nitrogen N₂", "Helium He",
    "Rising sea levels", "More extreme weather events", "Loss of biodiversity", "All of the above",
    "Using renewable energy sources", "Wasting more water", "Driving gasoline-powered cars more often", "Cutting down more trees",
    "It absorbs more CO₂", "It releases stored CO₂", "It improves air quality", "It has no impact",
    "Increased sea levels", "Better farming conditions", "More desert areas", "Less extreme weather",
    "Yes, of course!", "Absolutely!", "Indubitably!", "100% Yes!"
];

const correctAnswers = [1, 3, 1, 3, 0, 1, 0, -1];

function load() {
    document.getElementById("question").textContent = (q + 1) + ". " + questions[q];
    document.getElementById("choices").innerHTML =
        `<div class='choice' onclick='selectChoice(this, 0)'>${choices[q * 4]}</div>` +
        `<div class='choice' onclick='selectChoice(this, 1)'>${choices[q * 4 + 1]}</div>` +
        `<div class='choice' onclick='selectChoice(this, 2)'>${choices[q * 4 + 2]}</div>` +
        `<div class='choice' onclick='selectChoice(this, 3)'>${choices[q * 4 + 3]}</div>`;
}

function selectChoice(element, choiceIndex) {
    document.querySelectorAll(".choice").forEach(choice => choice.style.background = "white");
    element.style.background = "#ddd";
    selectedAnswers[q] = choiceIndex;
}

function next() {
    if (q < 7) {
        q++;
        load();
    }
}

function prev() {
    if (q > 0) {
        q--;
        load();
    }
}

function submitQuiz() {
    score = 0;
    let choicesDiv = document.querySelectorAll(".choice");
    choicesDiv.forEach(choice => choice.classList.remove("correct", "incorrect"));
    
    for (let i = 0; i < questions.length; i++) {
        if (correctAnswers[i] === -1 || selectedAnswers[i] === correctAnswers[i]) {
            score++;
            choicesDiv[selectedAnswers[i]]?.classList.add("correct");
        } else {
            choicesDiv[selectedAnswers[i]]?.classList.add("incorrect");
        }
    }
    document.getElementById("result").innerText = "Quiz Complete! Your score: " + score + " / " + questions.length;
}

load();
